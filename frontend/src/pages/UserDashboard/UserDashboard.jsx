import { useState } from "react";
import "./UserDashboard.css";

import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

import DashboardHome from "./DashboardHome/DashboardHome";
import MyOrders from "./MyOrders/MyOrders";
import Wishlist from "./Wishlist/Wishlist";

import ReservationTable from "../../components/reservationTable/reservationTable";

import Coupons from "./Coupons/Coupons";
import LoyaltyPoints from "./LoyaltyPoints/LoyaltyPoints";
import Notifications from "./Notifications/Notifications";
import Messages from "./Messages/Messages";
import PaymentHistory from "./PaymentHistory/PaymentHistory";
import Reviews from "./Reviews/Reviews";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Logout from "./Logout/Logout";

function UserDashboard() {

  const [active, setActive] = useState("dashboard");

  // =====================================================
  // GET LOGGED-IN CUSTOMER
  // =====================================================

  const customer = {
    id: localStorage.getItem("userId"),
    fullName: localStorage.getItem("fullName") || "Customer",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    role: localStorage.getItem("role") || "CUSTOMER",
  };

  return (
    <div className="dashboard-container">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <Sidebar
        active={active}
        setActive={setActive}
        customer={customer}
      />

      {/* =================================================
          MAIN AREA
      ================================================= */}

      <div className="content">

        {/* =================================================
            NAVBAR
        ================================================= */}

        <Navbar
          customer={customer}
          setActive={setActive}
        />

        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <div className="dashboard-content">

          {/* =================================================
              DASHBOARD HOME

              Reservation information can be shown here.
          ================================================= */}

          {active === "dashboard" && (
            <DashboardHome
              customer={customer}
              setActive={setActive}
            />
          )}

          {/* =================================================
              ORDERS
          ================================================= */}

          {active === "orders" && (
            <MyOrders
              customer={customer}
            />
          )}

          {/* =================================================
              WISHLIST
          ================================================= */}

          {active === "wishlist" && (
            <Wishlist
              customer={customer}
            />
          )}

          {/* =================================================
              RESERVATIONS
          ================================================= */}

          {active === "reservations" && (
            <ReservationTable
              customer={customer}
            />
          )}

          {/* =================================================
              COUPONS
          ================================================= */}

          {active === "coupons" && (
            <Coupons
              customer={customer}
            />
          )}

          {/* =================================================
              LOYALTY
          ================================================= */}

          {active === "loyalty" && (
            <LoyaltyPoints
              customer={customer}
            />
          )}

          {/* =================================================
              NOTIFICATIONS
          ================================================= */}

          {active === "notifications" && (
            <Notifications
              customer={customer}
            />
          )}

          {/* =================================================
              MESSAGES
          ================================================= */}

          {active === "messages" && (
            <Messages
              customer={customer}
            />
          )}

          {/* =================================================
              PAYMENT HISTORY
          ================================================= */}

          {active === "payments" && (
            <PaymentHistory
              customer={customer}
            />
          )}

          {/* =================================================
              REVIEWS
          ================================================= */}

          {active === "reviews" && (
            <Reviews
              customer={customer}
            />
          )}

          {/* =================================================
              PROFILE
          ================================================= */}

          {active === "profile" && (
            <Profile
              customer={customer}
            />
          )}

          {/* =================================================
              SETTINGS
          ================================================= */}

          {active === "settings" && (
            <Settings
              customer={customer}
            />
          )}

          {/* =================================================
              LOGOUT
          ================================================= */}

          {active === "logout" && (
            <Logout
              customer={customer}
            />
          )}

        </div>

      </div>

    </div>
  );
}

export default UserDashboard;