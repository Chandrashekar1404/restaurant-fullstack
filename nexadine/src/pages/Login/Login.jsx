import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosConfig";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post(
        "/auth/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("LOGIN RESPONSE:", response.data);

      const user = response.data;

      // Save token if your backend returns one
      if (user.token) {
        localStorage.setItem(
          "token",
          user.token
        );
      }

      // Save logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      // =========================
      // ROLE BASED NAVIGATION
      // =========================

      if (user.role === "ADMIN") {

        navigate("/admin/dashboard");

      } else if (user.role === "WAITER") {

        navigate("/waiter/dashboard");

      } else if (user.role === "CUSTOMER") {

        navigate("/user-dashboard");

      } else {

        alert("Unknown user role.");

      }

    } catch (error) {

      console.error(
        "Login Error:",
        error
      );

      console.error(
        "Backend Response:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
        error.response?.data ||
        "Invalid email or password"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="login-page">

      <div className="left"></div>

      <div className="right">

        <form
          className="card"
          onSubmit={handleLogin}
        >

          <h1>NexaDine</h1>

          <p>
            Smart Restaurant Management
          </p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;