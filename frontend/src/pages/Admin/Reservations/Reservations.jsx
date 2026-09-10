import { useEffect, useState } from "react";
import API from "../../../api/axiosConfig";
import "./Reservations.css";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // GET ALL RESERVATIONS
  // =====================================================

  const getReservations = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const response = await API.get("/reservations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("=================================");
      console.log("ADMIN RESERVATIONS");
      console.log("=================================");
      console.log(response.data);

      setReservations(
        Array.isArray(response.data)
          ? response.data
          : []
      );
    } catch (err) {
      console.error(
        "GET RESERVATIONS ERROR:",
        err
      );

      if (err.response) {
        console.error(
          "Status:",
          err.response.status
        );

        console.error(
          "Response:",
          err.response.data
        );
      }

      setError(
        "Unable to load reservations."
      );

      setReservations([]);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOAD WHEN PAGE OPENS
  // =====================================================

  useEffect(() => {
    getReservations();
  }, []);

  // =====================================================
  // SUMMARY
  // =====================================================

  const totalReservations =
    reservations.length;

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const todayReservations =
    reservations.filter(
      (reservation) =>
        reservation.reservationDate === today
    ).length;

  const confirmedReservations =
    reservations.filter(
      (reservation) =>
        String(
          reservation.status || ""
        ).toLowerCase() === "confirmed"
    ).length;

  const pendingReservations =
    reservations.filter(
      (reservation) =>
        String(
          reservation.status || ""
        ).toLowerCase() === "pending"
    ).length;

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="reservations-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="reservations-header">

        <div>
          <h1>
            📅 Table Reservations
          </h1>

          <p>
            Manage customer table reservations
          </p>
        </div>

        <button
          type="button"
          className="refresh-reservations-button"
          onClick={getReservations}
        >
          🔄 Refresh
        </button>

      </div>


      {/* =========================================
          SUMMARY
      ========================================= */}

      <div className="reservation-summary">

        <div className="reservation-card">
          <strong>
            {totalReservations}
          </strong>

          <span>
            Total Reservations
          </span>
        </div>


        <div className="reservation-card">
          <strong>
            {todayReservations}
          </strong>

          <span>
            Today's Reservations
          </span>
        </div>


        <div className="reservation-card">
          <strong>
            {confirmedReservations}
          </strong>

          <span>
            Confirmed
          </span>
        </div>


        <div className="reservation-card">
          <strong>
            {pendingReservations}
          </strong>

          <span>
            Pending
          </span>
        </div>

      </div>


      {/* =========================================
          ERROR
      ========================================= */}

      {error && (
        <div className="reservation-error">
          ❌ {error}
        </div>
      )}


      {/* =========================================
          TABLE
      ========================================= */}

      <div className="reservation-table-wrapper">

        <table className="reservation-table">

          <thead>

            <tr>
              <th>Reservation ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Status</th>
            </tr>

          </thead>


          <tbody>

            {/* LOADING */}

            {loading && (
              <tr>
                <td
                  colSpan="8"
                  className="no-reservations"
                >
                  ⏳ Loading reservations...
                </td>
              </tr>
            )}


            {/* EMPTY */}

            {!loading &&
              reservations.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="no-reservations"
                  >
                    📭 No reservations yet
                  </td>
                </tr>
              )}


            {/* RESERVATIONS */}

            {!loading &&
              reservations.length > 0 &&
              reservations.map(
                (reservation) => (

                  <tr
                    key={reservation.id}
                  >

                    <td>
                      #{reservation.id}
                    </td>

                    <td>
                      {reservation.customerName ||
                        "N/A"}
                    </td>

                    <td>
                      {reservation.phone ||
                        "N/A"}
                    </td>

                    <td>
                      {reservation.email ||
                        "N/A"}
                    </td>

                    <td>
                      {reservation.reservationDate ||
                        "N/A"}
                    </td>

                    <td>
                      {reservation.reservationTime ||
                        "N/A"}
                    </td>

                    <td>
                      {reservation.guests || 0}
                    </td>

                    <td>

                      <span
                        className={`reservation-status ${String(
                          reservation.status ||
                            "Pending"
                        ).toLowerCase()}`}
                      >
                        {reservation.status ||
                          "Pending"}
                      </span>

                    </td>

                  </tr>

                )
              )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Reservations;