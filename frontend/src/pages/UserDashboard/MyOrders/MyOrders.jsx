import { useEffect, useState } from "react";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();

    // Refresh orders every 10 seconds
    const interval = setInterval(() => {
      loadOrders();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const loadOrders = async () => {
    const customerId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!customerId) {
      setOrders([]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/api/orders/customer/${customerId}`,
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
        throw new Error("Failed to load orders");
      }

      const data = await response.json();

      console.log("CUSTOMER ORDERS:", data);

      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("ORDER ERROR:", error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusClass = (status) => {
    if (!status) {
      return "pending";
    }

    return status
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    try {
      return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "-";
    }
  };

  if (loading) {
    return (
      <div className="orders-page">
        <h1>📦 My Orders</h1>

        <div className="loading-orders">
          <p>Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-header">
        <div>
          <h1>📦 My Orders</h1>

          <p>
            View your orders, payment status and current order status.
          </p>
        </div>

        <button
          type="button"
          className="refresh-orders-btn"
          onClick={loadOrders}
        >
          🔄 Refresh
        </button>
      </div>

      {orders.length === 0 ? (
        <div className="empty-orders">
          <div className="empty-icon">🛍️</div>

          <h2>No Orders Yet</h2>

          <p>
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Food Items</th>
                <th>Date</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Order Status</th>
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

                  {/* FOOD */}
                  <td>
                    <div className="food-items">
                      {order.foodItems ||
                        order.items ||
                        "Food Order"}
                    </div>
                  </td>

                  {/* DATE */}
                  <td>
                    {formatDate(
                      order.orderDate ||
                        order.createdAt
                    )}
                  </td>

                  {/* TOTAL */}
                  <td>
                    <strong className="order-price">
                      ₹
                      {Number(
                        order.totalAmount || 0
                      ).toFixed(2)}
                    </strong>
                  </td>

                  {/* PAYMENT */}
                  <td>
                    <span
                      className={`payment-status ${
                        order.paymentStatus
                          ? order.paymentStatus
                              .toString()
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                          : "pending"
                      }`}
                    >
                      {order.paymentStatus ||
                        "Pending"}
                    </span>
                  </td>

                  {/* ORDER STATUS */}
                  <td>
                    <span
                      className={`order-status ${getStatusClass(
                        order.orderStatus
                      )}`}
                    >
                      {order.orderStatus ||
                        "Pending"}
                    </span>
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

export default MyOrders;