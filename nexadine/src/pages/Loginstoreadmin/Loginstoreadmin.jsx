import "./Loginstoreadmin.css";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../../api/axiosConfig";
import ad1 from "../../assets/images/ads/ad1.jpg";
import ad2 from "../../assets/images/ads/ad2.jpg";

function Loginstoreadmin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await API.post(
        "/auth/login",
        {
          email: email.trim(),
          password: password,
        }
      );

      console.log("LOGIN RESPONSE:", response.data);

      // =====================================================
      // CLEAR PREVIOUS USER SESSION
      // =====================================================

      localStorage.removeItem("userId");
      localStorage.removeItem("fullName");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
      localStorage.removeItem("role");
      localStorage.removeItem("token");

      // =====================================================
      // SAVE CURRENT LOGGED-IN USER
      // =====================================================

      localStorage.setItem(
        "userId",
        response.data.id
      );

      localStorage.setItem(
        "fullName",
        response.data.fullName
      );

      localStorage.setItem(
        "email",
        response.data.email
      );

      localStorage.setItem(
        "phone",
        response.data.phone
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      // =====================================================
      // ROLE
      // =====================================================

      const role = response.data.role;

      // =====================================================
      // NAVIGATION
      // =====================================================

      if (role === "ADMIN") {
        alert("Welcome Admin!");

        navigate("/admin/dashboard");
      }

      else if (role === "WAITER") {
        alert("Welcome Waiter!");

        navigate("/waiter/dashboard");
      }

      else {
        alert(
          `Welcome ${response.data.fullName}!`
        );

        navigate("/user-dashboard");
      }

    } catch (error) {

      console.error(
        "LOGIN ERROR:",
        error
      );

      const message =
        error.response?.data?.message ||
        "Invalid email or password";

      alert(message);

    } finally {

      setLoading(false);

    }
  };

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="login-page">

      {/* =================================================
          LEFT ADVERTISEMENT
      ================================================= */}

      <div className="login-ad left-ad">

        <img
          src={ad1}
          alt="NexaDine Advertisement"
        />

      </div>


      {/* =================================================
          LOGIN SECTION
      ================================================= */}

      <div className="login-center">

        <form
          className="login-box"
          onSubmit={handleLogin}
        >

          {/* LOGO / TITLE */}

          <div className="login-title">

            <div className="login-icon">
              🍽️
            </div>

            <h1>
              Login
            </h1>

            <p>
              Welcome back to GRAND NexaDine
            </p>

          </div>


          {/* =================================================
              EMAIL
          ================================================= */}

          <div className="login-field">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>


          {/* =================================================
              PASSWORD
          ================================================= */}

          <div className="login-field">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>


          {/* =================================================
              LOGIN BUTTON
          ================================================= */}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >

            {loading
              ? "Logging in..."
              : "Login"
            }

          </button>


          {/* =================================================
              REGISTER
          ================================================= */}

          <p className="register-text">

            Don't have an account?

            <Link to="/register">
              {" "}Register
            </Link>

          </p>

        </form>

      </div>


      {/* =================================================
          RIGHT ADVERTISEMENT
      ================================================= */}

      <div className="login-ad right-ad">

        <img
          src={ad2}
          alt="NexaDine Advertisement"
        />

      </div>

    </div>
  );
}

export default Loginstoreadmin;