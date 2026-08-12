import { useEffect, useState } from "react";
import {
  getWaiterOrders,
  updateWaiterOrderStatus,
} from "../../../services/waiterService";

import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  // =====================================================
  // LOAD ORDERS
  // =====================================================

  const loadOrders = async () => {
    try {
      setLoading(true);

      const data = await getWaiterOrders();

      console.log("WAITER ORDERS:", data);

      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load waiter orders:", error);

      setOrders([]);

      alert("Unable to load orders.");
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // INITIAL LOAD
  // =====================================================

  useEffect(() => {
    loadOrders();
  }, []);

  // =====================================================
  // UPDATE ORDER STATUS
  // =====================================================

  const handleStatusChange = async (id, status) => {
    try {
      setUpdatingId(id);

      console.log(
        "Updating order:",
        id,
        "New status:",
        status
      );

      const updatedOrder =
        await updateWaiterOrderStatus(id, status);

      console.log(
        "Updated order:",
        updatedOrder
      );

      /*
       * Update the order immediately in the UI.
       */
      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order.id === id
            ? {
                ...order,
                ...(updatedOrder || {}),
                orderStatus:
                  updatedOrder?.orderStatus || status,
              }
            : order
        )
      );

    } catch (error) {
      console.error(
        "Failed to update order status:",
        error
      );

      alert(
        "Unable to update order status."
      );

      /*
       * Reload orders in case backend updated
       * successfully but response was unexpected.
       */
      await loadOrders();

    } finally {
      setUpdatingId(null);
    }
  };

  // =====================================================
  // STATUS CLASS
  // =====================================================

  const getStatusClass = (status) => {
    if (!status) {
      return "pending";
    }

    return String(status)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");
  };

  // =====================================================
  // CHECK STATUS
  // =====================================================

  const isStatus = (orderStatus, status) => {
    return (
      String(orderStatus || "")
        .toLowerCase()
        .trim() ===
      String(status)
        .toLowerCase()
        .trim()
    );
  };

  // =====================================================
  // COUNTS
  // =====================================================

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) =>
      isStatus(
        order.orderStatus,
        "Pending"
      )
  ).length;

  const preparingOrders = orders.filter(
    (order) =>
      isStatus(
        order.orderStatus,
        "Preparing"
      )
  ).length;

  const readyOrders = orders.filter(
    (order) =>
      isStatus(
        order.orderStatus,
        "Ready"
      )
  ).length;

  const completedOrders = orders.filter(
    (order) =>
      isStatus(
        order.orderStatus,
        "Completed"
      )
  ).length;

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="waiter-orders">

        <div className="orders-loading">

          <div className="loading-spinner"></div>

          <h2>
            Loading Orders...
          </h2>

          <p>
            Please wait while we load
            the latest customer orders.
          </p>

        </div>

      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="waiter-orders">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div className="orders-page-header">

        <div>

          <h1>
            📦 Orders
          </h1>

          <p>
            Manage customer orders and
            update their status.
          </p>

        </div>

        <button
          type="button"
          className="orders-refresh-btn"
          onClick={loadOrders}
          disabled={loading}
        >
          🔄 Refresh
        </button>

      </div>


      {/* =================================================
          ORDER COUNT CARDS
      ================================================= */}

      <div className="orders-count-card">

        {/* TOTAL */}

        <div className="order-count-item">

          <span>
            📦 Total Orders
          </span>

          <strong>
            {totalOrders}
          </strong>

        </div>


        {/* PENDING */}

        <div className="order-count-item pending-count">

          <span>
            ⏳ Pending
          </span>

          <strong>
            {pendingOrders}
          </strong>

        </div>


        {/* PREPARING */}

        <div className="order-count-item preparing-count">

          <span>
            👨‍🍳 Preparing
          </span>

          <strong>
            {preparingOrders}
          </strong>

        </div>


        {/* READY */}

        <div className="order-count-item ready-count">

          <span>
            ✅ Ready
          </span>

          <strong>
            {readyOrders}
          </strong>

        </div>


        {/* COMPLETED */}

        <div className="order-count-item completed-count">

          <span>
            🎉 Completed
          </span>

          <strong>
            {completedOrders}
          </strong>

        </div>

      </div>


      {/* =================================================
          ORDERS
      ================================================= */}

      <div className="waiter-orders-container">

        {orders.length === 0 ? (

          <div className="no-orders">

            <div className="no-orders-icon">
              🍽️
            </div>

            <h2>
              No Orders
            </h2>

            <p>
              There are no customer orders
              right now.
            </p>

            <button
              type="button"
              onClick={loadOrders}
              className="empty-refresh-btn"
            >
              🔄 Refresh Orders
            </button>

          </div>

        ) : (

          orders.map((order) => {

            const status =
              order.orderStatus ||
              "Pending";

            const statusClass =
              getStatusClass(status);

            const isUpdating =
              updatingId === order.id;

            return (

              <div
                className="waiter-order-card"
                key={order.id}
              >

                {/* =====================================
                    ORDER HEADER
                ===================================== */}

                <div className="order-card-header">

                  <div>

                    <h3>
                      Order #{order.id}
                    </h3>

                    <span>
                      {order.orderDate
                        ? new Date(
                            order.orderDate
                          ).toLocaleString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )
                        : "Date unavailable"}
                    </span>

                  </div>


                  <span
                    className={`order-status ${statusClass}`}
                  >
                    {status}
                  </span>

                </div>


                {/* =====================================
                    CUSTOMER INFORMATION
                ===================================== */}

                <div className="customer-info">

                  <h4>
                    👤 Customer
                  </h4>

                  <p>
                    <strong>
                      Name:
                    </strong>{" "}
                    {order.customerName ||
                      "Customer"}
                  </p>

                  <p>
                    📞{" "}
                    {order.phone ||
                      "Phone unavailable"}
                  </p>

                  {order.email && (
                    <p>
                      ✉️ {order.email}
                    </p>
                  )}

                  {order.address && (
                    <p>
                      📍 {order.address}
                    </p>
                  )}

                </div>


                {/* =====================================
                    FOOD ITEMS
                ===================================== */}

                <div className="order-food">

                  <h4>
                    🍽️ Food Items
                  </h4>

                  <p>
                    {order.foodItems ||
                      "Food items unavailable"}
                  </p>

                  {order.quantity !==
                    undefined &&
                    order.quantity !==
                      null && (

                    <p>
                      Quantity:{" "}
                      <strong>
                        {order.quantity}
                      </strong>
                    </p>

                  )}

                </div>


                {/* =====================================
                    PAYMENT
                ===================================== */}

                <div className="order-payment">

                  <div>

                    <span>
                      Payment Method
                    </span>

                    <strong>
                      {order.paymentMethod ||
                        "Not specified"}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Payment Status
                    </span>

                    <strong
                      className={
                        String(
                          order.paymentStatus ||
                            ""
                        )
                          .toLowerCase() ===
                        "paid"
                          ? "payment-paid"
                          : "payment-pending"
                      }
                    >
                      {order.paymentStatus ||
                        "Pending"}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Total Amount
                    </span>

                    <strong className="order-total">

                      ₹
                      {Number(
                        order.totalAmount || 0
                      ).toLocaleString(
                        "en-IN",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}

                    </strong>

                  </div>

                </div>


                {/* =====================================
                    STATUS CONTROLS
                ===================================== */}

                <div className="order-actions">

                  <div className="status-title">

                    <span>
                      Update Order Status
                    </span>

                    {isUpdating && (
                      <small>
                        Updating...
                      </small>
                    )}

                  </div>


                  <div className="status-buttons">

                    {/* PENDING */}

                    <button
                      type="button"
                      className={
                        isStatus(
                          order.orderStatus,
                          "Pending"
                        )
                          ? "selected pending-button"
                          : "pending-button"
                      }
                      disabled={isUpdating}
                      onClick={() =>
                        handleStatusChange(
                          order.id,
                          "Pending"
                        )
                      }
                    >
                      ⏳ Pending
                    </button>


                    {/* PREPARING */}

                    <button
                      type="button"
                      className={
                        isStatus(
                          order.orderStatus,
                          "Preparing"
                        )
                          ? "selected preparing-button"
                          : "preparing-button"
                      }
                      disabled={isUpdating}
                      onClick={() =>
                        handleStatusChange(
                          order.id,
                          "Preparing"
                        )
                      }
                    >
                      👨‍🍳 Preparing
                    </button>


                    {/* READY */}

                    <button
                      type="button"
                      className={
                        isStatus(
                          order.orderStatus,
                          "Ready"
                        )
                          ? "selected ready-button"
                          : "ready-button"
                      }
                      disabled={isUpdating}
                      onClick={() =>
                        handleStatusChange(
                          order.id,
                          "Ready"
                        )
                      }
                    >
                      ✅ Ready
                    </button>


                    {/* COMPLETED */}

                    <button
                      type="button"
                      className={
                        isStatus(
                          order.orderStatus,
                          "Completed"
                        )
                          ? "selected completed-button"
                          : "completed-button"
                      }
                      disabled={isUpdating}
                      onClick={() =>
                        handleStatusChange(
                          order.id,
                          "Completed"
                        )
                      }
                    >
                      🎉 Completed
                    </button>

                  </div>

                </div>

              </div>

            );
          })

        )}

      </div>

    </div>
  );
}

export default Orders;