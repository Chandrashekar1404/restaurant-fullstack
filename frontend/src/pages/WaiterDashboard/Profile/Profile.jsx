import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    fullName: "Waiter",
    email: "waiter@nexadine.com",
    phone: "9391104651",
    role: "Waiter",
    employeeId: "WTR001",
    joiningDate: "06 August 2026",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);

    // Later you can call your Spring Boot API here.
    alert("Profile updated successfully!");
  };

  return (
    <div className="waiter-profile-page">

      {/* Header */}

      <div className="profile-header">
        <div>
          <h1>My Profile</h1>

          <p>
            View and manage your waiter account information.
          </p>
        </div>
      </div>

      {/* Profile Content */}

      <div className="profile-container">

        {/* Profile Card */}

        <div className="profile-card">

          <div className="profile-cover"></div>

          <div className="profile-main">

            <div className="profile-avatar">
              {profile.fullName.charAt(0).toUpperCase()}
            </div>

            <h2>{profile.fullName}</h2>

            <p className="profile-role">
              {profile.role}
            </p>

            <span className="active-badge">
              ● Active
            </span>

          </div>

          <div className="profile-stats">

            <div>
              <strong>{profile.employeeId}</strong>
              <span>Employee ID</span>
            </div>

            <div>
              <strong>Waiter</strong>
              <span>Department</span>
            </div>

            <div>
              <strong>{profile.joiningDate}</strong>
              <span>Joined</span>
            </div>

          </div>

        </div>

        {/* Information Card */}

        <div className="profile-information">

          <div className="information-header">

            <div>
              <h2>Personal Information</h2>

              <p>
                Your basic account information.
              </p>
            </div>

            {!isEditing && (
              <button
                className="edit-profile-btn"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit Profile
              </button>
            )}

          </div>

          <div className="profile-form">

            {/* Full Name */}

            <div className="profile-field">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>

            {/* Email */}

            <div className="profile-field">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>

            {/* Phone */}

            <div className="profile-field">

              <label>
                Mobile Number
              </label>

              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>

            {/* Role */}

            <div className="profile-field">

              <label>
                Role
              </label>

              <input
                type="text"
                value={profile.role}
                disabled
              />

            </div>

            {/* Employee ID */}

            <div className="profile-field">

              <label>
                Employee ID
              </label>

              <input
                type="text"
                value={profile.employeeId}
                disabled
              />

            </div>

            {/* Joining Date */}

            <div className="profile-field">

              <label>
                Joining Date
              </label>

              <input
                type="text"
                value={profile.joiningDate}
                disabled
              />

            </div>

          </div>

          {/* Buttons */}

          {isEditing && (
            <div className="profile-buttons">

              <button
                className="cancel-profile-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

              <button
                className="save-profile-btn"
                onClick={handleSave}
              >
                💾 Save Changes
              </button>

            </div>
          )}

        </div>

        {/* Account Information */}

        <div className="account-security">

          <div className="security-icon">
            🔐
          </div>

          <div className="security-content">

            <h3>
              Account Security
            </h3>

            <p>
              Keep your account information secure.
              Your login credentials should not be
              shared with other staff members.
            </p>

          </div>

          <button
            className="change-password-btn"
            onClick={() =>
              alert("Password change feature coming soon.")
            }
          >
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;