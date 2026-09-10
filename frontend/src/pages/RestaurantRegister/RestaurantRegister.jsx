import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./RestaurantRegister.css";

function RestaurantRegister() {

  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    gstNumber: "",
    fssaiNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      restaurant.password !==
      restaurant.confirmPassword
    ) {

      alert("Passwords do not match!");

      return;
    }

    alert(
      "Restaurant registration submitted successfully!"
    );

    navigate("/");
  };

  return (

    <div className="restaurant-register-page">

      <div className="restaurant-register-container">

        {/* HEADER */}

        <div className="restaurant-register-header">

          <h1>
            Register Your Restaurant
          </h1>

          <p>
            Partner with GRAND NexaDine and grow
            your restaurant business.
          </p>

        </div>

        {/* FORM */}

        <form
          className="restaurant-register-form"
          onSubmit={handleSubmit}
        >

          {/* RESTAURANT INFORMATION */}

          <h2>
            Restaurant Information
          </h2>

          <div className="form-row">

            <div className="form-group">

              <label>
                Restaurant Name
              </label>

              <input
                type="text"
                name="restaurantName"
                placeholder="Enter restaurant name"
                value={restaurant.restaurantName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>
                Owner Name
              </label>

              <input
                type="text"
                name="ownerName"
                placeholder="Enter owner name"
                value={restaurant.ownerName}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* CONTACT */}

          <h2>
            Contact Information
          </h2>

          <div className="form-row">

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={restaurant.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={restaurant.phone}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* ADDRESS */}

          <div className="form-group">

            <label>
              Restaurant Address
            </label>

            <textarea
              name="address"
              placeholder="Enter complete restaurant address"
              value={restaurant.address}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>
              City
            </label>

            <input
              type="text"
              name="city"
              placeholder="Enter city"
              value={restaurant.city}
              onChange={handleChange}
              required
            />

          </div>

          {/* LICENSE */}

          <h2>
            Restaurant Documents
          </h2>

          <div className="form-row">

            <div className="form-group">

              <label>
                GST Number
              </label>

              <input
                type="text"
                name="gstNumber"
                placeholder="Enter GST number"
                value={restaurant.gstNumber}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                FSSAI Number
              </label>

              <input
                type="text"
                name="fssaiNumber"
                placeholder="Enter FSSAI number"
                value={restaurant.fssaiNumber}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* PASSWORD */}

          <h2>
            Account Security
          </h2>

          <div className="form-row">

            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={restaurant.password}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={restaurant.confirmPassword}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="restaurant-submit-btn"
          >
            Register Restaurant
          </button>

          <p className="back-login">

            Already have a restaurant account?

            <Link to="/login">
              Login
            </Link>

          </p>

          <button
            type="button"
            className="back-home-btn"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>

        </form>

      </div>

    </div>

  );
}

export default RestaurantRegister;