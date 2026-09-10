import React from "react";
import "./Footer.css";
import restaurantInfo from "../../data/restaurantInfo";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box">
          <h2>NexaDine</h2>
          <p>
            Smart Restaurant Management System designed to simplify restaurant
            operations with a modern and user-friendly experience.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaGithub />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>📍 Hyderabad, India</p>
          <p>📞 +91 9391104651</p>
          <p>📧 support@nexadine.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 NexaDine | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;