import { useEffect, useState } from "react";
import {
  getWaiterOrders,
  updateWaiterOrderStatus,
} from "../../../services/waiterService";

import "./Dashboard.css";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);

  const [loading, setLoading] = useState(true);
  const [updatingOrderId, setUpdatingOrderId] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  // =====================================================
  // LOAD ORDERS
  // =====================================================

  const loadOrders = async () => {
    try {
      const data = await getWaiterOrders();

      console.log("WAITER ORDERS:", data);

      setOrders(Array.isArray(data) ? data : []);
      setErrorMessage("");
    } catch (error) {
      console.error("Failed to load orders:", error);

      setOrders([]);
      setErrorMessage("Unable to load orders.");
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOAD RESERVATIONS
  // =====================================================

  const loadReservations = async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/reservations"
      );

      if (!response.ok) {
        throw new Error("Failed to load reservations");
      }

      const data = await response.json();

      console.log("WAITER RESERVATIONS:", data);

      setReservations(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(
        "Failed to load reservations:",
        error
      );

      setReservations([]);
    }
  };

  // =====================================================
  // LOAD EVERYTHING
  // =====================================================

  const loadDashboard = async () => {
    await Promise.all([
      loadOrders(),
      loadReservations(),
    ]);
  };

  // =====================================================
  // INITIAL LOAD + LIVE REFRESH
  // =====================================================

  useEffect(() => {
    loadDashboard();

    // Refresh every 5 seconds
    const interval = setInterval(() => {
      loadDashboard();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // =====================================================
  // UPDATE ORDER STATUS
  // =====================================================

  const handleStatusChange = async (
    orderId,
    newStatus
  ) => {
    try {
      setUpdatingOrderId(orderId);

      console.log(
        `Updating order ${orderId} to ${newStatus}`
      );

      const updatedOrder =
        await updateWaiterOrderStatus(
          orderId,
          newStatus
        );

      console.log(
        "UPDATED ORDER:",
        updatedOrder
      );

      // Update immediately in UI
      setOrders((previousOrders) =>
        previousOrders.map((order) =>
          order.id === orderId
            ? {
                ...order,
                orderStatus: newStatus,
              }
            : order
        )
      );

    } catch (error) {
      console.error(
        "STATUS UPDATE ERROR:",
        error
      );

      alert(
        "Failed to update order status."
      );
    } finally {
      setUpdatingOrderId(null);
    }
  };

  // =====================================================
  // STATUS COUNTS
  // =====================================================

  const pendingOrders = orders.filter(
    (order) =>
      order.orderStatus?.toLowerCase() ===
      "pending"
  );

  const preparingOrders = orders.filter(
    (order) =>
      order.orderStatus?.toLowerCase() ===
      "preparing"
  );

  const readyOrders = orders.filter(
    (order) =>
      order.orderStatus?.toLowerCase() ===
      "ready"
  );

  const completedOrders = orders.filter(
    (order) =>
      order.orderStatus?.toLowerCase() ===
      "completed"
  );

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="waiter-dashboard loading-screen">
        <h1>Waiter Dashboard</h1>

        <p>
          Loading orders and reservations...
        </p>
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="waiter-dashboard">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="dashboard-header">

        <div>
          <h1>
            Waiter Dashboard
          </h1>

          <p>
            Manage restaurant orders and tables
          </p>
        </div>

        <button
          className="refresh-btn"
          onClick={loadDashboard}
        >
          🔄 Refresh
        </button>

      </div>

      {/* =================================================
          ERROR
      ================================================= */}

      {errorMessage && (
        <div className="dashboard-error">
          ⚠️ {errorMessage}
        </div>
      )}

      {/* =================================================
          STATISTICS
      ================================================= */}

      <div className="dashboard-cards">

        {/* TOTAL ORDERS */}

        <div className="dashboard-card">

          <div className="card-icon">
            📦
          </div>

          <div>
            <h3>
              Total Orders
            </h3>

            <strong>
              {orders.length}
            </strong>
          </div>

        </div>

        {/* PENDING */}

        <div className="dashboard-card pending">

          <div className="card-icon">
            ⏳
          </div>

          <div>
            <h3>
              Pending
            </h3>

            <strong>
              {pendingOrders.length}
            </strong>
          </div>

        </div>

        {/* PREPARING */}

        <div className="dashboard-card preparing">

          <div className="card-icon">
            👨‍🍳
          </div>

          <div>
            <h3>
              Preparing
            </h3>

            <strong>
              {preparingOrders.length}
            </strong>
          </div>

        </div>

        {/* READY */}

        <div className="dashboard-card ready">

          <div className="card-icon">
            ✅
          </div>

          <div>
            <h3>
              Ready
            </h3>

            <strong>
              {readyOrders.length}
            </strong>
          </div>

        </div>

        {/* COMPLETED */}

        <div className="dashboard-card completed">

          <div className="card-icon">
            🎉
          </div>

          <div>
            <h3>
              Completed
            </h3>

            <strong>
              {completedOrders.length}
            </strong>
          </div>

        </div>

        {/* RESERVATIONS */}

        <div className="dashboard-card reservations">

          <div className="card-icon">
            🍽️
          </div>

          <div>
            <h3>
              Total Reservations
            </h3>

            <strong>
              {reservations.length}
            </strong>
          </div>

        </div>

      </div>

      {/* =================================================
          RECENT ORDERS
      ================================================= */}

      <div className="recent-orders">

        <div className="section-header">

          <div>
            <h2>
              Live Orders
            </h2>

            <p className="live-indicator">
              🟢 Live updates every 5 seconds
            </p>
          </div>

          <span>
            {orders.length} Orders
          </span>

        </div>

        {/* NO ORDERS */}

        {orders.length === 0 ? (

          <div className="empty-orders">

            <div>
              🍽️
            </div>

            <h3>
              No Orders Found
            </h3>

            <p>
              There are currently no customer orders.
            </p>

          </div>

        ) : (

          <div className="orders-table">

            {/* TABLE HEADER */}

            <div className="table-header">

              <span>
                ID
              </span>

              <span>
                Customer
              </span>

              <span>
                Items
              </span>

              <span>
                Amount
              </span>

              <span>
                Payment
              </span>

              <span>
                Status
              </span>

              <span>
                Update
              </span>

            </div>

            {/* ORDERS */}

            {orders.map((order) => {

              const status =
                order.orderStatus
                  ?.toLowerCase()
                  .replace(/\s+/g, "-") ||
                "pending";

              return (

                <div
                  className="table-row"
                  key={order.id}
                >

                  {/* ID */}

                  <span>
                    #{order.id}
                  </span>

                  {/* CUSTOMER */}

                  <span>
                    {order.customerName ||
                      "Customer"}
                  </span>

                  {/* ITEMS */}

                  <span>
                    {order.foodItems ||
                      "Food items"}
                  </span>

                  {/* AMOUNT */}

                  <span>
                    ₹
                    {Number(
                      order.totalAmount || 0
                    ).toFixed(2)}
                  </span>

                  {/* PAYMENT */}

                  <span>
                    <b
                      className={`payment-status ${
                        order.paymentStatus
                          ?.toLowerCase()
                          .replace(/\s+/g, "-") ||
                        "pending"
                      }`}
                    >
                      {order.paymentStatus ||
                        "Pending"}
                    </b>
                  </span>

                  {/* CURRENT STATUS */}

                  <span>

                    <b
                      className={`status ${status}`}
                    >
                      {order.orderStatus ||
                        "Pending"}
                    </b>

                  </span>

                  {/* STATUS UPDATE */}

                  <span>

                    <select
                      className="status-select"
                      value={
                        order.orderStatus ||
                        "Pending"
                      }
                      disabled={
                        updatingOrderId ===
                        order.id
                      }
                      onChange={(e) =>
                        handleStatusChange(
                          order.id,
                          e.target.value
                        )
                      }
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Preparing">
                        Preparing
                      </option>

                      <option value="Ready">
                        Ready
                      </option>

                      <option value="Completed">
                        Completed
                      </option>

                    </select>

                    {updatingOrderId ===
                      order.id && (
                      <small className="updating-text">
                        Updating...
                      </small>
                    )}

                  </span>

                </div>

              );
            })}

          </div>

        )}

      </div>

      {/* =================================================
          RESERVATIONS
      ================================================= */}

      <div className="recent-orders reservations-section">

        <div className="section-header">

          <div>
            <h2>
              🍽️ Live Reservations
            </h2>

            <p>
              Current customer table reservations
            </p>
          </div>

          <span>
            {reservations.length} Reservations
          </span>

        </div>

        {reservations.length === 0 ? (

          <div className="empty-orders">

            <div>
              🪑
            </div>

            <h3>
              No Reservations
            </h3>

            <p>
              There are currently no reservations.
            </p>

          </div>

        ) : (

          <div className="reservation-list">

            {reservations
              .slice(0, 10)
              .map((reservation) => (

                <div
                  className="reservation-card"
                  key={reservation.id}
                >

                  <div>
                    <strong>
                      Reservation #
                      {reservation.id}
                    </strong>

                    <p>
                      👤{" "}
                      {reservation.customerName ||
                        "Customer"}
                    </p>
                  </div>

                  <div>
                    📅{" "}
                    {reservation.reservationDate ||
                      "-"}

                    <br />

                    🕐{" "}
                    {reservation.reservationTime ||
                      "-"}

                  </div>

                  <div>
                    👥{" "}
                    {reservation.guests ||
                      0}{" "}
                    Guests
                  </div>

                </div>

              ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Dashboard;