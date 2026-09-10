import { useEffect, useState } from "react";
import "./Orders.css";

import {
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../../../services/orderService";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // LOAD ALL ORDERS
  // =====================================================

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAllOrders();

      console.log("ADMIN ORDERS:", data);

      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("GET ORDERS ERROR:", err);

      setError(
        "Unable to load orders. Please check the backend."
      );
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
      const updatedOrder = await updateOrderStatus(
        id,
        status
      );

      setOrders((previousOrders) =>
        previousOrders.map((order) =>
          order.id === id
            ? updatedOrder
            : order
        )
      );
    } catch (err) {
      console.error(
        "UPDATE ORDER STATUS ERROR:",
        err
      );

      alert("Could not update order status.");
    }
  };

  // =====================================================
  // DELETE ORDER
  // =====================================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteOrder(id);

      setOrders((previousOrders) =>
        previousOrders.filter(
          (order) => order.id !== id
        )
      );
    } catch (err) {
      console.error(
        "DELETE ORDER ERROR:",
        err
      );

      alert("Could not delete order.");
    }
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="orders-page">
        <h1>📦 Orders</h1>

        <div className="orders-loading">
          Loading orders...
        </div>
      </div>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {
    return (
      <div className="orders-page">
        <h1>📦 Orders</h1>

        <div className="orders-error">
          <p>{error}</p>

          <button
            type="button"
            onClick={loadOrders}
          >
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="orders-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="orders-header">

        <div>
          <h1>📦 Orders</h1>

          <p>
            Live customer orders from NexaDine
          </p>
        </div>

        <button
          type="button"
          className="refresh-orders-button"
          onClick={loadOrders}
        >
          🔄 Refresh
        </button>

      </div>

      {/* =========================================
          ORDER COUNT
      ========================================= */}

      <div className="orders-summary">

        <div className="order-summary-card">
          <strong>{orders.length}</strong>
          <span>Total Orders</span>
        </div>

        <div className="order-summary-card">
          <strong>
            {
              orders.filter(
                (order) =>
                  order.orderStatus === "Pending"
              ).length
            }
          </strong>

          <span>Pending</span>
        </div>

        <div className="order-summary-card">
          <strong>
            {
              orders.filter(
                (order) =>
                  order.orderStatus === "Preparing"
              ).length
            }
          </strong>

          <span>Preparing</span>
        </div>

        <div className="order-summary-card">
          <strong>
            {
              orders.filter(
                (order) =>
                  order.orderStatus === "Delivered"
              ).length
            }
          </strong>

          <span>Delivered</span>
        </div>

      </div>

      {/* =========================================
          NO ORDERS
      ========================================= */}

      {orders.length === 0 ? (
        <div className="no-orders">

          <h2>📭 No Orders Yet</h2>

          <p>
            New customer orders will appear here
            automatically.
          </p>

        </div>
      ) : (

        /* =========================================
           ORDERS TABLE
        ========================================= */

        <div className="orders-table-wrapper">

          <table className="orders-table">

            <thead>
              <tr>

                <th>Order ID</th>

                <th>Customer</th>

                <th>Phone</th>

                <th>Email</th>

                <th>Food Items</th>

                <th>Qty</th>

                <th>Total</th>

                <th>Payment</th>

                <th>Status</th>

                <th>Date</th>

                <th>Action</th>

              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order.id}>

                  {/* ORDER ID */}

                  <td>
                    <strong>
                      #{order.id}
                    </strong>
                  </td>

                  {/* CUSTOMER */}

                  <td>
                    <strong>
                      {order.customerName ||
                        "Unknown Customer"}
                    </strong>
                  </td>

                  {/* PHONE */}

                  <td>
                    {order.phone || "-"}
                  </td>

                  {/* EMAIL */}

                  <td>
                    {order.email || "-"}
                  </td>

                  {/* FOOD */}

                  <td className="food-items-cell">
                    {order.foodItems || "-"}
                  </td>

                  {/* QUANTITY */}

                  <td>
                    {order.quantity || 0}
                  </td>

                  {/* TOTAL */}

                  <td>
                    ₹
                    {Number(
                      order.totalAmount || 0
                    ).toFixed(2)}
                  </td>

                  {/* PAYMENT */}

                  <td>

                    <div>
                      {order.paymentMethod ||
                        "-"}

                    </div>

                    <small>
                      {order.paymentStatus ||
                        "Pending"}
                    </small>

                  </td>

                  {/* STATUS */}

                  <td>

                    <select
                      value={
                        order.orderStatus ||
                        "Pending"
                      }
                      onChange={(event) =>
                        handleStatusChange(
                          order.id,
                          event.target.value
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

                      <option value="Out for Delivery">
                        Out for Delivery
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>

                    </select>

                  </td>

                  {/* DATE */}

                  <td>

                    {order.orderDate
                      ? new Date(
                          order.orderDate
                        ).toLocaleString()
                      : "-"}

                  </td>

                  {/* DELETE */}

                  <td>

                    <button
                      type="button"
                      className="delete-order-button"
                      onClick={() =>
                        handleDelete(
                          order.id
                        )
                      }
                    >
                      🗑️
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default Orders;