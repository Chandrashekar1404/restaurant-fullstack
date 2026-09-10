import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosConfig";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      console.log("REGISTER DATA:", form);

      const response = await API.post(
        "/auth/register",
        {
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          password: form.password,
        }
      );

      console.log("REGISTER RESPONSE:", response.data);

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {
      console.error("REGISTER ERROR:", error);

      console.log(
        "SERVER RESPONSE:",
        error.response?.data
      );

      const message =
        error.response?.data?.message ||
        "Registration Failed";

      alert(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <form
        className="register-box"
        onSubmit={handleRegister}
      >

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Join NexaDine today
        </p>

        {/* FULL NAME */}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
        />

        {/* EMAIL */}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* PHONE */}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        {/* PASSWORD */}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        {/* REGISTER BUTTON */}

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Creating Account..."
            : "Register"}
        </button>

        {/* LOGIN */}

        <p className="login-link">
          Already have an account?

          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>

      </form>

    </div>
  );
}

export default Register;