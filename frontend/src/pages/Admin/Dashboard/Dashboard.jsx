import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../../services/orderService";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    try {
      setLoading(true);

      const data = await getAllOrders();

      console.log("ADMIN ORDERS:", data);

      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load admin orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const totalOrders = orders.length;

  const today = new Date().toISOString().split("T")[0];

  const todayOrders = orders.filter((order) => {
    if (!order.orderDate) return false;

    return order.orderDate.startsWith(today);
  });

  const todayRevenue = todayOrders.reduce(
    (sum, order) => sum + Number(order.totalAmount || 0),
    0
  );

  const recentOrders = [...orders]
    .sort(
      (a, b) =>
        new Date(b.orderDate || 0) -
        new Date(a.orderDate || 0)
    )
    .slice(0, 10);

  return (
    <div className="admin-dashboard">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>
          <h1>
            👨‍💼 GRAND NexaDine Admin Dashboard
          </h1>

          <p>
            Welcome back, Admin! Here's today's restaurant overview.
          </p>
        </div>

        <div className="admin-profile">

          <div className="profile-avatar">
            👨‍💼
          </div>

          <div>
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>

        </div>

      </div>


      {/* STATISTICS */}

      <div className="cards">

        <div className="card orange-card">
          <h2>🍽️ {totalOrders}</h2>
          <p>Total Orders</p>
        </div>

        <div className="card green-card">
          <h2>
            💰 ₹{todayRevenue.toFixed(2)}
          </h2>
          <p>Today's Revenue</p>
        </div>

        <div className="card purple-card">
          <h2>🪑 0</h2>
          <p>Available Tables</p>
        </div>

        <div className="card blue-card">
          <h2>👥 {new Set(
            orders
              .map((order) => order.customerId || order.email)
              .filter(Boolean)
          ).size}</h2>
          <p>Customers With Orders</p>
        </div>

        <div className="card">
          <h2>🍔 0</h2>
          <p>Menu Items</p>
        </div>

        <div className="card">
          <h2>⭐ 0</h2>
          <p>Customer Rating</p>
        </div>

      </div>


      {/* RECENT ORDERS */}

      <div className="table-section">

        <div className="section-header">

          <div>
            <h2>📦 Live / Recent Orders</h2>

            <p>
              Real orders received from customers
            </p>
          </div>

          <button
            type="button"
            className="view-button"
            onClick={() => navigate("/admin/orders")}
          >
            View All
          </button>

        </div>


        <div className="table-wrapper">

          {loading ? (
            <p>Loading orders...</p>
          ) : recentOrders.length === 0 ? (

            <div className="empty-orders">
              <h3>📦 0 Orders</h3>

              <p>
                No customer orders have been received yet.
              </p>
            </div>

          ) : (

            <table>

              <thead>

                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Food</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>

              </thead>


              <tbody>

                {recentOrders.map((order) => (

                  <tr key={order.id}>

                    <td>
                      #{order.id}
                    </td>

                    <td>
                      <strong>
                        {order.customerName || "Unknown"}
                      </strong>
                    </td>

                    <td>
                      {order.email || "-"}
                    </td>

                    <td>
                      {order.phone || "-"}
                    </td>

                    <td>
                      {order.foodItems || "-"}
                    </td>

                    <td>
                      ₹
                      {Number(
                        order.totalAmount || 0
                      ).toFixed(2)}
                    </td>

                    <td>
                      {order.paymentStatus || "-"}
                    </td>

                    <td>

                      <span
                        className={`status ${
                          order.orderStatus
                            ?.toLowerCase()
                            .replace(/\s+/g, "-") || ""
                        }`}
                      >
                        {order.orderStatus || "Pending"}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </div>

      </div>


      {/* CUSTOMER DETAILS */}

      <div className="table-section">

        <div className="section-header">

          <div>
            <h2>👥 Latest Customers</h2>

            <p>
              Customers who recently placed orders
            </p>
          </div>

          <button
            type="button"
            className="view-button"
            onClick={() =>
              navigate("/admin/customers")
            }
          >
            View Customers
          </button>

        </div>


        <div className="table-wrapper">

          {recentOrders.length === 0 ? (

            <div className="empty-orders">
              <h3>👥 0 Customers</h3>
            </div>

          ) : (

            <table>

              <thead>

                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Orders</th>
                </tr>

              </thead>


              <tbody>

                {recentOrders.map((order) => (

                  <tr key={`customer-${order.id}`}>

                    <td>
                      {order.customerName || "Unknown"}
                    </td>

                    <td>
                      {order.email || "-"}
                    </td>

                    <td>
                      {order.phone || "-"}
                    </td>

                    <td>
                      {order.address || "-"}
                    </td>

                    <td>
                      1
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </div>

      </div>


      {/* QUICK ACTIONS */}

      <div className="quick-actions">

        <h2>⚡ Quick Actions</h2>

        <p>
          Frequently used admin functions
        </p>

        <div className="action-buttons">

          <button
            type="button"
            onClick={() => navigate("/admin/menu")}
          >
            ➕ Add Food Item
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/orders")}
          >
            📦 View Orders
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/admin/reservations")
            }
          >
            📅 Manage Reservations
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/admin/customers")
            }
          >
            👥 View Customers
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/admin/reports")
            }
          >
            📊 Sales Reports
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;