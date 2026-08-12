import "./Sidebar.css";

import {
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaUtensils,
  FaGift,
  FaStar,
  FaBell,
  FaEnvelope,
  FaCreditCard,
  FaCommentDots,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar({ active, setActive }) {

  // =====================================================
  // CURRENT LOGGED-IN CUSTOMER
  // =====================================================

  const fullName =
    localStorage.getItem("fullName") || "Customer";

  const email =
    localStorage.getItem("email") || "";

  const phone =
    localStorage.getItem("phone") || "";

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {

    localStorage.removeItem("userId");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    window.location.href = "/login";
  };


  return (

    <div className="sidebar">

      {/* =================================================
          CUSTOMER PROFILE
      ================================================= */}

      <div className="sidebar-top">

        <div className="profile">

          <div className="profile-avatar">
            <FaUser />
          </div>

          <h3>
            {fullName}
          </h3>

          <p>
            Customer
          </p>

          <small>
            {email}
          </small>

          <small>
            {phone}
          </small>

        </div>

      </div>


      {/* =================================================
          MENU
      ================================================= */}

      <ul>

        <li
          className={active === "dashboard" ? "active" : ""}
          onClick={() => setActive("dashboard")}
        >
          <FaHome />
          <span>Dashboard</span>
        </li>


        <li
          className={active === "orders" ? "active" : ""}
          onClick={() => setActive("orders")}
        >
          <FaShoppingBag />
          <span>My Orders</span>
        </li>


        <li
          className={active === "wishlist" ? "active" : ""}
          onClick={() => setActive("wishlist")}
        >
          <FaHeart />
          <span>Wishlist</span>
        </li>


        <li
          className={active === "reservations" ? "active" : ""}
          onClick={() => setActive("reservations")}
        >
          <FaUtensils />
          <span>Reservations</span>
        </li>


        <li
          className={active === "coupons" ? "active" : ""}
          onClick={() => setActive("coupons")}
        >
          <FaGift />
          <span>Coupons</span>
        </li>


        <li
          className={active === "loyalty" ? "active" : ""}
          onClick={() => setActive("loyalty")}
        >
          <FaStar />
          <span>Loyalty Points</span>
        </li>


        <li
          className={active === "notifications" ? "active" : ""}
          onClick={() => setActive("notifications")}
        >
          <FaBell />
          <span>Notifications</span>
        </li>


        <li
          className={active === "messages" ? "active" : ""}
          onClick={() => setActive("messages")}
        >
          <FaEnvelope />
          <span>Messages</span>
        </li>


        <li
          className={active === "payments" ? "active" : ""}
          onClick={() => setActive("payments")}
        >
          <FaCreditCard />
          <span>Payment History</span>
        </li>


        <li
          className={active === "reviews" ? "active" : ""}
          onClick={() => setActive("reviews")}
        >
          <FaCommentDots />
          <span>My Reviews</span>
        </li>


        <li
          className={active === "profile" ? "active" : ""}
          onClick={() => setActive("profile")}
        >
          <FaUser />
          <span>Profile</span>
        </li>


        <li
          className={active === "settings" ? "active" : ""}
          onClick={() => setActive("settings")}
        >
          <FaCog />
          <span>Settings</span>
        </li>


        <li
          className={active === "logout" ? "active" : ""}
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </li>

      </ul>

    </div>

  );
}

export default Sidebar;