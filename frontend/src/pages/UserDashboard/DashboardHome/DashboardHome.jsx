import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./DashboardHome.css";
import API from "../../../api/axiosConfig";

function DashboardHome() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const customerId = localStorage.getItem("userId");

  const fullName =
    localStorage.getItem("fullName") || "Customer";

  const email =
    localStorage.getItem("email") || "";

  const phone =
    localStorage.getItem("phone") || "";

  // =====================================================
  // LOAD CUSTOMER DATA
  // =====================================================

  const loadCustomerData = async (showRefresh = false) => {
    if (!customerId) {
      setLoading(false);
      return;
    }

    if (showRefresh) {
      setRefreshing(true);
    }

    try {
      // =================================================
      // CUSTOMER ORDERS
      // =================================================

      try {
        const ordersResponse = await API.get(
          `/orders/customer/${customerId}`
        );

        if (ordersResponse.status === 200) {
          const orderData = Array.isArray(
            ordersResponse.data
          )
            ? ordersResponse.data
            : [];

          setOrders(orderData);
        }
      } catch (error) {
        console.error(
          "Customer orders loading error:",
          error
        );
      }

      // =================================================
      // CUSTOMER RESERVATIONS
      // =================================================

      try {
        const reservationsResponse =
          await API.get(
            `/reservations/customer/${customerId}`
          );

        if (reservationsResponse.status === 200) {
          const reservationData =
            Array.isArray(
              reservationsResponse.data
            )
              ? reservationsResponse.data
              : [];

          setReservations(reservationData);
        }
      } catch (error) {
        console.error(
          "Customer reservations loading error:",
          error
        );
      }
    } catch (error) {
      console.error(
        "Dashboard data loading error:",
        error
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // =====================================================
  // INITIAL LOAD
  // =====================================================

  useEffect(() => {
    loadCustomerData();
  }, [customerId]);

  // =====================================================
  // AUTO REFRESH
  //
  // This allows the customer's order status to update
  // when the waiter changes it.
  // =====================================================

  useEffect(() => {
    if (!customerId) {
      return;
    }

    const interval = setInterval(() => {
      loadCustomerData();
    }, 5000);

    return () => clearInterval(interval);
  }, [customerId]);

  // =====================================================
  // TOTAL SPENT
  // =====================================================

  const totalSpent = orders.reduce(
    (total, order) => {
      return (
        total +
        (Number(order.totalAmount) || 0)
      );
    },
    0
  );

  // =====================================================
  // RECENT ORDERS
  // =====================================================

  const recentOrders = [...orders]
    .sort((a, b) => {
      const dateA = new Date(
        a.createdAt || 0
      ).getTime();

      const dateB = new Date(
        b.createdAt || 0
      ).getTime();

      return dateB - dateA;
    })
    .slice(0, 5);

  // =====================================================
  // LATEST RESERVATION
  // =====================================================

  const latestReservation =
    reservations.length > 0
      ? [...reservations].sort((a, b) => {
          const dateA = new Date(
            a.createdAt || 0
          ).getTime();

          const dateB = new Date(
            b.createdAt || 0
          ).getTime();

          return dateB - dateA;
        })[0]
      : null;

  // =====================================================
  // ORDER STATUS
  // =====================================================

  const getOrderStatus = (order) => {
    return (
      order.orderStatus ||
      order.status ||
      "Pending"
    );
  };

  // =====================================================
  // PAYMENT STATUS
  // =====================================================

  const getPaymentStatus = (order) => {
    return (
      order.paymentStatus ||
      "Pending"
    );
  };

  // =====================================================
  // STATUS CLASS
  // =====================================================

  const getStatusClass = (status) => {
    return String(status)
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  // =====================================================
  // FOOD ITEMS
  // =====================================================

  const getFoodItems = (order) => {
    if (!order.foodItems) {
      return "Food Order";
    }

    return order.foodItems;
  };

  // =====================================================
  // VIEW ORDER
  // =====================================================

  const handleViewOrder = (order) => {
    navigate("/order-success", {
      state: {
        order: order,
      },
    });
  };

  // =====================================================
  // NOT LOGGED IN
  // =====================================================

  if (!customerId) {
    return (
      <div className="dashboard-home">

        <div className="dashboard-login-message">

          <h2>
            Please Login First 🔐
          </h2>

          <p>
            Login to see your orders,
            reservations and account details.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </button>

        </div>

      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="dashboard-home">

      {/* =================================================
          WELCOME
      ================================================= */}

      <div className="dashboard-header">

        <div>

          <h1>
            Welcome Back, {fullName} 👋
          </h1>

          <p className="subtitle">
            Here's what's happening with your
            NexaDine account today.
          </p>

        </div>

        <button
          type="button"
          className="refresh-btn"
          onClick={() =>
            loadCustomerData(true)
          }
          disabled={refreshing}
        >
          {refreshing
            ? "Refreshing..."
            : "🔄 Refresh"}
        </button>

      </div>


      {/* =================================================
          CUSTOMER DETAILS
      ================================================= */}

      <div className="customer-profile-card">

        <div className="customer-avatar">
          👤
        </div>

        <div className="customer-profile-info">

          <h2>
            {fullName}
          </h2>

          <p>
            📧 {email || "Email not available"}
          </p>

          <p>
            📞 {phone || "Phone not available"}
          </p>

        </div>

      </div>


      {/* =================================================
          STATS
      ================================================= */}

      <div className="stats">

        {/* TOTAL ORDERS */}

        <div className="stat-card">

          <div className="stat-icon">
            🍽️
          </div>

          <div>

            <h2>
              {loading
                ? "..."
                : orders.length}
            </h2>

            <p>
              Total Orders
            </p>

          </div>

        </div>


        {/* TOTAL SPENT */}

        <div className="stat-card">

          <div className="stat-icon">
            💰
          </div>

          <div>

            <h2>
              {loading
                ? "..."
                : `₹${totalSpent.toLocaleString(
                    "en-IN"
                  )}`}
            </h2>

            <p>
              Total Spent
            </p>

          </div>

        </div>


        {/* RESERVATIONS */}

        <div className="stat-card">

          <div className="stat-icon">
            📅
          </div>

          <div>

            <h2>
              {loading
                ? "..."
                : reservations.length}
            </h2>

            <p>
              Reservations
            </p>

          </div>

        </div>

      </div>


      {/* =================================================
          ORDER STATUS SUMMARY
      ================================================= */}

      <div className="order-status-summary">

        <h2>
          Order Status
        </h2>

        <div className="status-summary-grid">

          <div className="status-summary-card">

            <span>
              🕐
            </span>

            <strong>
              {
                orders.filter(
                  (order) =>
                    getOrderStatus(order)
                      .toLowerCase() ===
                    "pending"
                ).length
              }
            </strong>

            <small>
              Pending
            </small>

          </div>


          <div className="status-summary-card">

            <span>
              👨‍🍳
            </span>

            <strong>
              {
                orders.filter(
                  (order) =>
                    getOrderStatus(order)
                      .toLowerCase()
                      .includes("prepar")
                ).length
              }
            </strong>

            <small>
              Preparing
            </small>

          </div>


          <div className="status-summary-card">

            <span>
              🚚
            </span>

            <strong>
              {
                orders.filter(
                  (order) => {
                    const status =
                      getOrderStatus(order)
                        .toLowerCase();

                    return (
                      status.includes(
                        "delivery"
                      ) ||
                      status.includes(
                        "out for"
                      )
                    );
                  }
                ).length
              }
            </strong>

            <small>
              Delivery
            </small>

          </div>


          <div className="status-summary-card">

            <span>
              ✅
            </span>

            <strong>
              {
                orders.filter(
                  (order) => {
                    const status =
                      getOrderStatus(order)
                        .toLowerCase();

                    return (
                      status.includes(
                        "complete"
                      ) ||
                      status.includes(
                        "deliver"
                      ) ||
                      status.includes(
                        "served"
                      )
                    );
                  }
                ).length
              }
            </strong>

            <small>
              Completed
            </small>

          </div>

        </div>

      </div>


      {/* =================================================
          RECENT ORDERS
      ================================================= */}

      <div className="recent-orders">

        <div className="section-title-row">

          <h2>
            My Recent Orders
          </h2>

          <button
            type="button"
            onClick={() =>
              navigate("/order-success")
            }
          >
            View Orders
          </button>

        </div>


        {loading ? (

          <div className="loading-box">
            Loading your orders...
          </div>

        ) : recentOrders.length === 0 ? (

          <div className="empty-orders">

            <div className="empty-icon">
              🍽️
            </div>

            <h3>
              No Orders Yet
            </h3>

            <p>
              Your orders will appear here
              after you complete a purchase.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/menu")
              }
            >
              Explore Menu
            </button>

          </div>

        ) : (

          <div className="orders-table-wrapper">

            <table className="orders-table">

              <thead>

                <tr>

                  <th>
                    Order ID
                  </th>

                  <th>
                    Food
                  </th>

                  <th>
                    Payment
                  </th>

                  <th>
                    Order Status
                  </th>

                  <th>
                    Total
                  </th>

                  <th>
                    Details
                  </th>

                </tr>

              </thead>


              <tbody>

                {recentOrders.map(
                  (order) => {

                    const orderStatus =
                      getOrderStatus(
                        order
                      );

                    const paymentStatus =
                      getPaymentStatus(
                        order
                      );

                    return (

                      <tr
                        key={
                          order.id ||
                          order.orderId
                        }
                      >

                        {/* ORDER ID */}

                        <td>

                          <strong>
                            #
                            {order.id ||
                              order.orderId ||
                              "N/A"}
                          </strong>

                        </td>


                        {/* FOOD */}

                        <td>

                          <div className="food-cell">

                            <strong>
                              {getFoodItems(
                                order
                              )}
                            </strong>

                            {order.quantity && (
                              <small>
                                Quantity:{" "}
                                {
                                  order.quantity
                                }
                              </small>
                            )}

                          </div>

                        </td>


                        {/* PAYMENT */}

                        <td>

                          <span
                            className={`status-badge payment-${getStatusClass(
                              paymentStatus
                            )}`}
                          >
                            {paymentStatus}
                          </span>

                        </td>


                        {/* ORDER STATUS */}

                        <td>

                          <span
                            className={`status-badge order-${getStatusClass(
                              orderStatus
                            )}`}
                          >
                            {orderStatus}
                          </span>

                        </td>


                        {/* TOTAL */}

                        <td>

                          <strong>
                            ₹
                            {Number(
                              order.totalAmount ||
                                0
                            ).toLocaleString(
                              "en-IN"
                            )}
                          </strong>

                        </td>


                        {/* DETAILS */}

                        <td>

                          <button
                            type="button"
                            className="view-order-btn"
                            onClick={() =>
                              handleViewOrder(
                                order
                              )
                            }
                          >
                            View
                          </button>

                        </td>

                      </tr>

                    );
                  }
                )}

              </tbody>

            </table>

          </div>

        )}

      </div>


      {/* =================================================
          LATEST RESERVATION
      ================================================= */}

      <div className="reservation-section">

        <div className="section-title-row">

          <h2>
            My Latest Reservation
          </h2>

          <button
            type="button"
            onClick={() =>
              navigate("/reservation")
            }
          >
            Book Table
          </button>

        </div>


        {latestReservation ? (

          <div className="reservation-card">

            {/* STATUS */}

            <div className="reservation-top">

              <h3>
                🍽️ Table Reservation
              </h3>

              <span
                className={`reservation-status ${getStatusClass(
                  latestReservation.status ||
                    "Pending"
                )}`}
              >
                {
                  latestReservation.status ||
                  "Pending"
                }
              </span>

            </div>


            {/* DETAILS */}

            <div className="reservation-details">

              <div className="reservation-detail">

                <span>
                  📅
                </span>

                <div>

                  <small>
                    Date
                  </small>

                  <strong>
                    {
                      latestReservation.reservationDate ||
                      "Not available"
                    }
                  </strong>

                </div>

              </div>


              <div className="reservation-detail">

                <span>
                  🕐
                </span>

                <div>

                  <small>
                    Time
                  </small>

                  <strong>
                    {
                      latestReservation.reservationTime ||
                      "Not available"
                    }
                  </strong>

                </div>

              </div>


              <div className="reservation-detail">

                <span>
                  👥
                </span>

                <div>

                  <small>
                    Guests
                  </small>

                  <strong>
                    {
                      latestReservation.guests ||
                      "Not available"
                    }
                  </strong>

                </div>

              </div>


              <div className="reservation-detail">

                <span>
                  👤
                </span>

                <div>

                  <small>
                    Name
                  </small>

                  <strong>
                    {
                      latestReservation.customerName ||
                      fullName
                    }
                  </strong>

                </div>

              </div>


              <div className="reservation-detail">

                <span>
                  📞
                </span>

                <div>

                  <small>
                    Phone
                  </small>

                  <strong>
                    {
                      latestReservation.phone ||
                      phone
                    }
                  </strong>

                </div>

              </div>


              <div className="reservation-detail">

                <span>
                  📧
                </span>

                <div>

                  <small>
                    Email
                  </small>

                  <strong>
                    {
                      latestReservation.email ||
                      email
                    }
                  </strong>

                </div>

              </div>

            </div>


            {/* CREATED DATE */}

            {latestReservation.createdAt && (

              <div className="reservation-created">

                Reservation created on{" "}

                {new Date(
                  latestReservation.createdAt
                ).toLocaleString(
                  "en-IN"
                )}

              </div>

            )}

          </div>

        ) : (

          <div className="no-reservation">

            <div className="no-reservation-icon">
              🍽️
            </div>

            <h3>
              No Reservation Yet
            </h3>

            <p>
              You don't have any table
              reservations yet.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/reservation")
              }
            >
              Reserve a Table
            </button>

          </div>

        )}

      </div>


      {/* =================================================
          ACCOUNT INFORMATION
      ================================================= */}

      <div className="account-information">

        <h2>
          Account Information
        </h2>

        <div className="account-info-grid">

          <div>

            <small>
              Full Name
            </small>

            <strong>
              {fullName}
            </strong>

          </div>


          <div>

            <small>
              Email
            </small>

            <strong>
              {email || "Not available"}
            </strong>

          </div>


          <div>

            <small>
              Phone
            </small>

            <strong>
              {phone || "Not available"}
            </strong>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardHome;