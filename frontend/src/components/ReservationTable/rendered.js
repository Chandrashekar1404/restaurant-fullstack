import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png/logo.png";
import ReservationTable from "../ReservationTable/ReservationTable";

const Header = () => {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
      <header className="header">

        {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="NexaDine Logo" className="logo" />
          <h2>NexaDine</h2>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>

            <li>
              <button
                className="reservation-btn"
                onClick={() => setShowReservation(true)}
              >
                Reserve Table
              </button>
            </li>
          </ul>
        </nav>

        {/* Login */}
        <div className="login-section">
          <button className="login-btn">Login</button>
        </div>

      </header>

      {/* Reservation Popup */}
      {showReservation && (
        <ReservationTable
          onClose={() => setShowReservation(false)}
        />
      )}
    </>
  );
};

export default Header;