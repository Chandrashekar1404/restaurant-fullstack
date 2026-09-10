import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="order-success">

      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for ordering with
          <strong> NexaDine</strong>.
        </p>

        <p>
          Your payment has been received successfully.
        </p>

        <div className="order-details">

          <div className="detail">
            <span>Order ID</span>
            <strong>#NXD10245</strong>
          </div>

          <div className="detail">
            <span>Payment Status</span>
            <strong className="paid">PAID</strong>
          </div>

          <div className="detail">
            <span>Estimated Delivery</span>
            <strong>30 - 40 Minutes</strong>
          </div>

        </div>

        <div className="success-buttons">

          <Link to="/">
            <button className="home-btn">
              Back to Home
            </button>
          </Link>

          <Link to="/menu">
            <button className="menu-btn">
              Order More
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;