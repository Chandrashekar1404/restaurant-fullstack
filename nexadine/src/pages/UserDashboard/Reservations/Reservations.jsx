import { useEffect, useState } from "react";
import "./Reservations.css";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadReservations();

    // Refresh reservations every 10 seconds
    const interval = setInterval(() => {
      loadReservations();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // =====================================================
  // LOAD CUSTOMER RESERVATIONS
  // =====================================================

  const loadReservations = async () => {
    const customerId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!customerId) {
      setReservations([]);
      setMessage("Please login to view your reservations.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/api/reservations/customer/${customerId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",

            ...(token
              ? {
                  Authorization: `Bearer ${token}`,
                }
              : {}),
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to load reservations");
      }

      const data = await response.json();

      console.log("CUSTOMER RESERVATIONS:", data);

      setReservations(
        Array.isArray(data) ? data : []
      );

      setMessage("");
    } catch (error) {
      console.error(
        "RESERVATION ERROR:",
        error
      );

      setReservations([]);

      setMessage(
        "Unable to load your reservations."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    try {
      return new Date(date).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );
    } catch {
      return "-";
    }
  };

  // =====================================================
  // STATUS CLASS
  // =====================================================

  const getStatusClass = (status) => {
    if (!status) {
      return "pending";
    }

    return status
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  // =====================================================
  // CANCEL RESERVATION
  // =====================================================

  const handleCancel = async (reservationId) => {
    const token = localStorage.getItem("token");

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this reservation?"
    );

    if (!confirmCancel) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/api/reservations/${reservationId}/cancel`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",

            ...(token
              ? {
                  Authorization: `Bearer ${token}`,
                }
              : {}),
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to cancel reservation"
        );
      }

      setMessage(
        "✅ Reservation cancelled successfully."
      );

      loadReservations();
    } catch (error) {
      console.error(
        "CANCEL RESERVATION ERROR:",
        error
      );

      setMessage(
        "❌ Unable to cancel reservation."
      );
    }
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="reservations-page">

        <div className="reservations-header">
          <div>
            <h1>🍽 My Reservations</h1>

            <p>
              View and manage your table reservations.
            </p>
          </div>
        </div>

        <div className="reservations-loading">
          <div className="loading-icon">
            🍽️
          </div>

          <p>
            Loading your reservations...
          </p>
        </div>

      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="reservations-page">

      {/* ================= HEADER ================= */}

      <div className="reservations-header">

        <div>
          <h1>
            🍽 My Reservations
          </h1>

          <p>
            View and manage your restaurant
            table reservations.
          </p>
        </div>

        <button
          type="button"
          className="reservation-refresh-btn"
          onClick={loadReservations}
        >
          🔄 Refresh
        </button>

      </div>

      {/* ================= MESSAGE ================= */}

      {message && (
        <div className="reservation-message">
          {message}
        </div>
      )}

      {/* ================= EMPTY ================= */}

      {reservations.length === 0 ? (

        <div className="no-reservations">

          <div className="no-reservation-icon">
            🍽️
          </div>

          <h2>
            No Reservations Yet
          </h2>

          <p>
            You haven't made any table reservations
            yet.
          </p>

        </div>

      ) : (

        /* ================= RESERVATION CARDS ================= */

        <div className="reservations-grid">

          {reservations.map((reservation) => (

            <div
              className="reservation-card"
              key={reservation.id}
            >

              {/* CARD HEADER */}

              <div className="reservation-card-header">

                <div>
                  <span className="reservation-label">
                    Reservation
                  </span>

                  <h2>
                    #{reservation.id}
                  </h2>
                </div>

                <span
                  className={`reservation-status ${getStatusClass(
                    reservation.status ||
                      reservation.reservationStatus
                  )}`}
                >
                  {reservation.status ||
                    reservation.reservationStatus ||
                    "Pending"}
                </span>

              </div>

              {/* CUSTOMER */}

              <div className="reservation-section">

                <h3>
                  👤 Customer Details
                </h3>

                <div className="reservation-details">

                  <div>
                    <span>Name</span>

                    <strong>
                      {reservation.customerName ||
                        localStorage.getItem(
                          "fullName"
                        ) ||
                        "-"}
                    </strong>
                  </div>

                  <div>
                    <span>Phone</span>

                    <strong>
                      {reservation.phone ||
                        localStorage.getItem(
                          "phone"
                        ) ||
                        "-"}
                    </strong>
                  </div>

                  <div>
                    <span>Email</span>

                    <strong>
                      {reservation.email ||
                        localStorage.getItem(
                          "email"
                        ) ||
                        "-"}
                    </strong>
                  </div>

                </div>

              </div>

              {/* RESERVATION INFORMATION */}

              <div className="reservation-section">

                <h3>
                  📅 Reservation Details
                </h3>

                <div className="reservation-details">

                  <div>
                    <span>Date</span>

                    <strong>
                      {formatDate(
                        reservation.reservationDate
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>Time</span>

                    <strong>
                      {reservation.reservationTime ||
                        "-"}
                    </strong>
                  </div>

                  <div>
                    <span>Guests</span>

                    <strong>
                      👥{" "}
                      {reservation.guests ||
                        0}
                    </strong>
                  </div>

                </div>

              </div>

              {/* CANCEL */}

              {String(
                reservation.status ||
                  reservation.reservationStatus ||
                  ""
              ).toUpperCase() !==
                "CANCELLED" &&
                String(
                  reservation.status ||
                    reservation.reservationStatus ||
                    ""
                ).toUpperCase() !==
                  "COMPLETED" && (
                  <button
                    type="button"
                    className="cancel-reservation-btn"
                    onClick={() =>
                      handleCancel(
                        reservation.id
                      )
                    }
                  >
                    ❌ Cancel Reservation
                  </button>
                )}

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Reservations;