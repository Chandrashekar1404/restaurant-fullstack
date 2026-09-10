import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.css";

import { useCart } from "../../context/CartContext";

function Header() {

  const navigate = useNavigate();

  const { cart, total } = useCart();

  const [searchText, setSearchText] = useState("");

  // ============================================
  // SEARCH FOOD
  // ============================================

  const handleSearch = (e) => {

    e.preventDefault();

    const searchValue = searchText.trim();

    if (!searchValue) {
      navigate("/menu");
      return;
    }

    navigate(
      `/menu?search=${encodeURIComponent(searchValue)}`
    );
  };


  // ============================================
  // TOTAL ITEMS IN CART
  // ============================================

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );


  return (

    <header>

      {/* ================= TOP ANNOUNCEMENT ================= */}

      <div className="top-announcement">

        Shipping Available All Over India! 🚚

        <span>•</span>

        Free Shipping on Orders Above ₹1,499

      </div>


      {/* ================= MAIN HEADER ================= */}

      <div className="main-header">


        {/* LOGO */}

        <Link
          to="/"
          className="nexa-logo"
        >

          <div className="logo-icon">
            🍽️
          </div>

          <div className="logo-text">
            <span>Nexa</span>Dine
          </div>

        </Link>


        {/* ================= SEARCH ================= */}

        <form
          className="header-search"
          onSubmit={handleSearch}
        >

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search for food..."
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
          />

        </form>


        {/* ================= ACCOUNT ================= */}

        <Link
          to="/login"
          className="account-btn"
        >

          <span className="account-icon">
            👤
          </span>

          <span>
            Account
          </span>

        </Link>


        {/* ================= CART ================= */}

        <Link
          to="/cart"
          className="cart-btn"
        >

          <span className="cart-icon">
            🛒
          </span>

          <span>
            ₹ {Number(total).toFixed(2)} ({cartCount})
          </span>

        </Link>


      </div>


      {/* ================= BOTTOM NAVIGATION ================= */}

      <nav className="bottom-navigation">

        <Link to="/">
          Home
        </Link>

        <Link to="/menu">
          Explore Menu
        </Link>

        <Link to="/about">
          About Us
        </Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/contact">
          Contact Us
        </Link>

        <Link to="/reservation">
          Table Reservation
        </Link>

        <Link to="/feedback">
          Feedback
        </Link>

      </nav>

    </header>

  );
}

export default Header;