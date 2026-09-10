import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import adminUsers from "../../utils/adminUsers";
import "./StoteRegister.css";

function StoteRegister() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const admin = adminUsers.find(
      (item) =>
        item.email === user.email.trim() ||
        item.phone === user.phone.trim()
    );

    if (admin) {
      alert("Welcome Admin!");
      navigate("/admin/dashboard");
    } else {
      alert("Registration Successful!");
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="store-register-page">

      <form className="store-register-box" onSubmit={handleRegister}>

        <h1>Create Your Account</h1>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={user.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={user.phone}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </form>

    </div>
  );
}

export default StoteRegister;