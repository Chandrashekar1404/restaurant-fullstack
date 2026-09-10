import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "9876543210",
    address: "Hyderabad, Telangana",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="profile-page">

      <h1>👤 My Profile</h1>

      <div className="profile-card">

        <div className="profile-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
          />
        </div>

        <div className="profile-form">

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />

          <label>Address</label>
          <textarea
            name="address"
            rows="4"
            value={user.address}
            onChange={handleChange}
          />

          <button onClick={handleSave}>
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;