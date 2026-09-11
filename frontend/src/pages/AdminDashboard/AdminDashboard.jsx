import "./AdminDashboard.css";


import {
  FaShoppingBag,
  FaUtensils,
  FaUsers,
  FaChartLine,
  FaTicketAlt,
  FaCog,
  FaCalendarAlt,
  FaChair,
  FaRupeeSign,
  FaClipboardList,
  FaPlus,
  FaSignOutAlt,
  FaSyncAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axiosConfig";

function AdminDashboard() {

  const navigate = useNavigate();

  // =====================================================
  // STATES
  // =====================================================

  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [reservations, setReservations] = useState([]);

  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  // =====================================================
  // LOAD LIVE DATA
  // =====================================================

  const loadDashboardData = async () => {

    try {

      const [
              ordersResponse,
              customersResponse,
              reservationsResponse
            ] = await Promise.all([
              API.get("/orders"),
              API.get("/users"),
              API.get("/reservations")
            ]);

            // ==========================
            // ORDERS
            // ==========================

            if (ordersResponse.status === 200) {
              setOrders(ordersResponse.data || []);
            }

            // ==========================
            // CUSTOMERS
            // ==========================

            if (customersResponse.status === 200) {
              setCustomers(customersResponse.data || []);
            }

            // ==========================
            // RESERVATIONS
            // ==========================

            if (reservationsResponse.status === 200) {
              setReservations(reservationsResponse.data || []);
            }


      setLastUpdated(new Date());

    } catch (error) {

      console.error(
        "Admin dashboard error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };


  // =====================================================
  // LOAD WHEN PAGE OPENS
  // =====================================================

  useEffect(() => {

    loadDashboardData();

  }, []);


  // =====================================================
  // LIVE TRACKING
  // REFRESH EVERY 5 SECONDS
  // =====================================================

  useEffect(() => {

    const interval = setInterval(() => {

      loadDashboardData();

    }, 5000);

    return () => clearInterval(interval);

  }, []);


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("fullName");

    navigate("/login");

  };


  // =====================================================
  // TOTAL REVENUE
  // =====================================================

  const totalRevenue = orders.reduce(
    (sum, order) =>
      sum +
      (Number(order.totalAmount) || 0),
    0
  );


  // =====================================================
  // RECENT ORDERS
  // =====================================================

  const recentOrders =
    [...orders]
      .reverse()
      .slice(0, 5);


  // =====================================================
  // RECENT RESERVATIONS
  // =====================================================

  const recentReservations =
    [...reservations]
      .reverse()
      .slice(0, 5);


  // =====================================================
  // STATUS CLASS
  // =====================================================

  const getStatusClass = (status) => {

    if (!status) {
      return "pending";
    }

    const value =
      status.toLowerCase();

    if (
      value.includes("deliver") ||
      value.includes("complete") ||
      value.includes("confirm")
    ) {
      return "completed";
    }

    if (
      value.includes("prepar") ||
      value.includes("process")
    ) {
      return "preparing";
    }

    if (
      value.includes("cancel")
    ) {
      return "cancelled";
    }

    return "pending";

  };


  // =====================================================
  // DISPLAY STATUS
  // =====================================================

  const getOrderStatus = (order) => {

    return (
      order.orderStatus ||
      order.status ||
      "Pending"
    );

  };


  // =====================================================
  // RESERVATION CUSTOMER NAME
  // =====================================================

  const getReservationName = (reservation) => {

    return (
      reservation.customerName ||
      reservation.fullName ||
      reservation.name ||
      "Customer"
    );

  };


  // =====================================================
  // RESERVATION GUEST COUNT
  // =====================================================

  const getGuestCount = (reservation) => {

    return (
      reservation.guests ||
      reservation.numberOfGuests ||
      reservation.guestCount ||
      reservation.people ||
      0
    );

  };


  // =====================================================
  // RESERVATION TIME
  // =====================================================

  const getReservationTime = (reservation) => {

    return (
      reservation.time ||
      reservation.reservationTime ||
      reservation.bookingTime ||
      "Time not available"
    );

  };


  return (

    <div className="admin-layout">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside className="admin-sidebar">

        <div className="admin-logo">

          <div className="logo-icon">
            🍽️
          </div>

          <div>

            <h2>
              NexaDine
            </h2>

            <span>
              ADMIN PANEL
            </span>

          </div>

        </div>


        <nav className="admin-nav">

          <button
            className="nav-item active"
          >
            📊
            <span>
              Dashboard
            </span>
          </button>


          <button
            className="nav-item"
            onClick={() =>
              navigate("/admin/orders")
            }
          >

            <FaShoppingBag />

            <span>
              Orders
            </span>

          </button>


          <button
            className="nav-item"
            onClick={() =>
              navigate("/admin/menu")
            }
          >

            <FaUtensils />

            <span>
              Food Menu
            </span>

          </button>


          <button
            className="nav-item"
            onClick={() =>
              navigate("/admin/customers")
            }
          >

            <FaUsers />

            <span>
              Customers
            </span>

          </button>


          <button
            className="nav-item"
            onClick={() =>
              navigate("/admin/reservations")
            }
          >

            <FaCalendarAlt />

            <span>
              Reservations
            </span>

          </button>


          <button
            className="nav-item"
            onClick={() =>
              navigate("/admin/analytics")
            }
          >

            <FaChartLine />

            <span>
              Analytics
            </span>

          </button>


          <button
            className="nav-item"
            onClick={() =>
              navigate("/admin/coupons")
            }
          >

            <FaTicketAlt />

            <span>
              Coupons
            </span>

          </button>


          <button
            className="nav-item"
            onClick={() =>
              navigate("/admin/settings")
            }
          >

            <FaCog />

            <span>
              Settings
            </span>

          </button>

        </nav>


        <button
          className="logout-button"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>

      </aside>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="admin-main">


        {/* =================================================
            HEADER
        ================================================= */}

        <header className="admin-header">

          <div>

            <h1>
              Good Morning, Admin 👋
            </h1>

            <p>
              Here's what's happening at
              NexaDine today.
            </p>

            {lastUpdated && (

              <small
                style={{
                  display: "block",
                  marginTop: "6px",
                  color: "#777"
                }}
              >

                🟢 Live • Updated{" "}
                {lastUpdated.toLocaleTimeString()}

              </small>

            )}

          </div>


          <div className="admin-profile">

            <button
              onClick={loadDashboardData}
              title="Refresh dashboard"
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "20px",
                marginRight: "15px"
              }}
            >

              <FaSyncAlt />

            </button>


            <div className="profile-avatar">
              👨‍💼
            </div>


            <div>

              <strong>
                Admin
              </strong>

              <small>
                Administrator
              </small>

            </div>

          </div>

        </header>


        {/* =================================================
            STATISTICS
        ================================================= */}

        <section className="stats-grid">


          {/* TOTAL ORDERS */}

          <div className="stat-card orange">

            <div className="stat-icon">
              <FaShoppingBag />
            </div>

            <div>

              <span>
                Total Orders
              </span>

              <h2>

                {loading
                  ? "..."
                  : orders.length}

              </h2>

              <small>
                🟢 Live Orders
              </small>

            </div>

          </div>


          {/* REVENUE */}

          <div className="stat-card green">

            <div className="stat-icon">
              <FaRupeeSign />
            </div>

            <div>

              <span>
                Total Revenue
              </span>

              <h2>

                {loading
                  ? "..."
                  : `₹${totalRevenue.toLocaleString("en-IN")}`}

              </h2>

              <small>
                From all orders
              </small>

            </div>

          </div>


          {/* RESERVATIONS */}

          <div className="stat-card purple">

            <div className="stat-icon">
              <FaChair />
            </div>

            <div>

              <span>
                Reservations
              </span>

              <h2>

                {loading
                  ? "..."
                  : reservations.length}

              </h2>

              <small>
                🟢 Live Reservations
              </small>

            </div>

          </div>


          {/* CUSTOMERS */}

          <div className="stat-card blue">

            <div className="stat-icon">
              <FaUsers />
            </div>

            <div>

              <span>
                Registered Customers
              </span>

              <h2>

                {loading
                  ? "..."
                  : customers.length}

              </h2>

              <small>
                🟢 Live Customers
              </small>

            </div>

          </div>

        </section>


        {/* =================================================
            QUICK ACTIONS
        ================================================= */}

        <section className="quick-actions">

          <div className="section-title">

            <div>

              <h2>
                Quick Actions
              </h2>

              <p>
                Frequently used admin functions
              </p>

            </div>

          </div>


          <div className="action-grid">

            <button
              onClick={() =>
                navigate("/admin/menu")
              }
              className="action-button"
            >

              <FaPlus />

              <span>
                Add Food Item
              </span>

            </button>


            <button
              onClick={() =>
                navigate("/admin/orders")
              }
              className="action-button"
            >

              <FaClipboardList />

              <span>
                View Orders
              </span>

            </button>


            <button
              onClick={() =>
                navigate("/admin/reservations")
              }
              className="action-button"
            >

              <FaCalendarAlt />

              <span>
                Manage Reservations
              </span>

            </button>


            <button
              onClick={() =>
                navigate("/admin/customers")
              }
              className="action-button"
            >

              <FaUsers />

              <span>
                View Customers
              </span>

            </button>


            <button
              onClick={() =>
                navigate("/admin/analytics")
              }
              className="action-button"
            >

              <FaChartLine />

              <span>
                Sales Reports
              </span>

            </button>

          </div>

        </section>


        {/* =================================================
            LIVE ORDERS + RESERVATIONS
        ================================================= */}

        <section className="dashboard-columns">


          {/* =================================================
              LIVE ORDERS
          ================================================= */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>

                <h2>
                  📦 Live Orders
                </h2>

                <p>
                  Latest customer orders
                </p>

              </div>


              <button
                onClick={() =>
                  navigate("/admin/orders")
                }
                className="view-all"
              >
                View All
              </button>

            </div>


            <div className="table-wrapper">

              <table>

                <thead>

                  <tr>

                    <th>
                      Order ID
                    </th>

                    <th>
                      Customer
                    </th>

                    <th>
                      Food
                    </th>

                    <th>
                      Amount
                    </th>

                    <th>
                      Status
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {recentOrders.length === 0 ? (

                    <tr>

                      <td
                        colSpan="5"
                        style={{
                          textAlign: "center",
                          padding: "30px"
                        }}
                      >

                        {loading
                          ? "Loading orders..."
                          : "No orders found"}

                      </td>

                    </tr>

                  ) : (

                    recentOrders.map(
                      (order) => (

                        <tr
                          key={order.id}
                        >

                          <td>
                            #{order.id}
                          </td>


                          <td>
                            {order.customerName ||
                              "Customer"}
                          </td>


                          <td>
                            {order.foodItems ||
                              "Food Order"}
                          </td>


                          <td>

                            ₹
                            {Number(
                              order.totalAmount || 0
                            ).toLocaleString("en-IN")}

                          </td>


                          <td>

                            <span
                              className={`status ${getStatusClass(
                                getOrderStatus(order)
                              )}`}
                            >

                              {getOrderStatus(order)}

                            </span>

                          </td>

                        </tr>

                      )
                    )

                  )}

                </tbody>

              </table>

            </div>

          </div>


          {/* =================================================
              LIVE RESERVATIONS
          ================================================= */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>

                <h2>
                  📅 Live Reservations
                </h2>

                <p>
                  Latest table reservations
                </p>

              </div>


              <button
                onClick={() =>
                  navigate("/admin/reservations")
                }
                className="view-all"
              >
                View All
              </button>

            </div>


            <div className="reservation-list">

              {recentReservations.length === 0 ? (

                <div
                  style={{
                    padding: "30px",
                    textAlign: "center"
                  }}
                >

                  {loading
                    ? "Loading reservations..."
                    : "No reservations found"}

                </div>

              ) : (

                recentReservations.map(
                  (reservation) => (

                    <div
                      className="reservation"
                      key={reservation.id}
                    >

                      <div className="reservation-icon">
                        👤
                      </div>


                      <div className="reservation-info">

                        <strong>

                          {getReservationName(
                            reservation
                          )}

                        </strong>

                        <span>

                          {getReservationTime(
                            reservation
                          )}

                        </span>

                      </div>


                      <div className="guest-count">

                        {getGuestCount(
                          reservation
                        )} Guests

                      </div>

                    </div>

                  )
                )

              )}

            </div>

          </div>

        </section>


        {/* =================================================
            CUSTOMER TRACKING
        ================================================= */}

        <section className="dashboard-panel">

          <div className="panel-header">

            <div>

              <h2>
                👥 Customer Tracking
              </h2>

              <p>
                Registered customers
              </p>

            </div>


            <button
              onClick={() =>
                navigate("/admin/customers")
              }
              className="view-all"
            >
              View All
            </button>

          </div>


          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>
                    ID
                  </th>

                  <th>
                    Customer
                  </th>

                  <th>
                    Email
                  </th>

                  <th>
                    Phone
                  </th>

                  <th>
                    Role
                  </th>

                </tr>

              </thead>


              <tbody>

                {customers
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map(
                    (customer) => (

                      <tr
                        key={customer.id}
                      >

                        <td>
                          #{customer.id}
                        </td>

                        <td>

                          {customer.fullName ||
                            customer.name ||
                            "Customer"}

                        </td>

                        <td>
                          {customer.email || "-"}
                        </td>

                        <td>
                          {customer.phone || "-"}
                        </td>

                        <td>

                          <span className="status completed">

                            {customer.role ||
                              "CUSTOMER"}

                          </span>

                        </td>

                      </tr>

                    )
                  )}

              </tbody>

            </table>

          </div>

        </section>


        {/* =================================================
            BEST SELLING
        ================================================= */}

        <section className="dashboard-panel">

          <div className="panel-header">

            <div>

              <h2>
                🔥 Recent Food Orders
              </h2>

              <p>
                Food ordered by customers
              </p>

            </div>

          </div>


          <div className="selling-list">

            {recentOrders.map(
              (order) => (

                <div
                  className="selling-item"
                  key={order.id}
                >

                  <span className="food-emoji">
                    🍽️
                  </span>


                  <div>

                    <strong>
                      {order.foodItems ||
                        "Food Order"}
                    </strong>

                    <small>

                      Order #{order.id}

                    </small>

                  </div>


                  <b>

                    ₹
                    {Number(
                      order.totalAmount || 0
                    ).toLocaleString("en-IN")}

                  </b>

                </div>

              )
            )}

          </div>

        </section>


        {/* =================================================
            RESTAURANT OVERVIEW
        ================================================= */}

        <section className="dashboard-panel overview-panel">

          <div className="panel-header">

            <div>

              <h2>
                Restaurant Overview
              </h2>

              <p>
                Live restaurant information
              </p>

            </div>

          </div>


          <div className="overview-grid">


            <div className="overview-box">

              <span>
                🛒
              </span>

              <strong>
                {orders.length}
              </strong>

              <small>
                Total Orders
              </small>

            </div>


            <div className="overview-box">

              <span>
                👥
              </span>

              <strong>
                {customers.length}
              </strong>

              <small>
                Customers
              </small>

            </div>


            <div className="overview-box">

              <span>
                📅
              </span>

              <strong>
                {reservations.length}
              </strong>

              <small>
                Reservations
              </small>

            </div>


            <div className="overview-box">

              <span>
                💰
              </span>

              <strong>

                ₹
                {totalRevenue.toLocaleString(
                  "en-IN"
                )}

              </strong>

              <small>
                Revenue
              </small>

            </div>

          </div>

        </section>

      </main>

    </div>

  );

}

export default AdminDashboard;