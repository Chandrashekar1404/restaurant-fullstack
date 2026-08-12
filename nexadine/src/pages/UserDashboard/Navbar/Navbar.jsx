import "./Navbar.css";

import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaMoon,
  FaUserCircle
} from "react-icons/fa";

function Navbar() {

  // =====================================================
  // GET CURRENT LOGGED-IN CUSTOMER
  // =====================================================

  const fullName =
    localStorage.getItem("fullName") || "Customer";

  const email =
    localStorage.getItem("email") || "";

  const role =
    localStorage.getItem("role") || "CUSTOMER";


  return (

    <div className="navbar">

      {/* =================================================
          LEFT
      ================================================= */}

      <div className="navbar-left">

        <h2>NexaDine Dashboard</h2>

      </div>


      {/* =================================================
          SEARCH
      ================================================= */}

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search food, orders..."
        />

      </div>


      {/* =================================================
          RIGHT
      ================================================= */}

      <div className="navbar-right">


        {/* NOTIFICATIONS */}

        <div className="icon">

          <FaBell />

          <span>3</span>

        </div>


        {/* MESSAGES */}

        <div className="icon">

          <FaEnvelope />

          <span>5</span>

        </div>


        {/* DARK MODE */}

        <div className="icon">

          <FaMoon />

        </div>


        {/* =================================================
            CURRENT CUSTOMER
        ================================================= */}

        <div className="profile">

          <FaUserCircle className="avatar" />

          <div>

            <h4>
              {fullName}
            </h4>

            <p>
              {role === "CUSTOMER"
                ? "Customer"
                : role}
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Navbar;