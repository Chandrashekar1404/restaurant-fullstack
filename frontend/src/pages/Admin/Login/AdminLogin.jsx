import "./AdminLogin.css";
import logo from "../../../assets/logo.png/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@nexadine.com" && password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-header">
          <img src={logo} alt="Logo" className="login-logo" />
          <h1>GRAND NexaDine</h1>
          <p>Hotel & Restaurant Admin Panel</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            🔐 Login
          </button>

        </form>

        <div className="footer-text">
          © 2026 GRAND NexaDine HOTEL & RESTAURANT
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;