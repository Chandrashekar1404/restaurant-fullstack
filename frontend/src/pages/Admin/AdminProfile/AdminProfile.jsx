import "./AdminProfile.css";


function AdminProfile() {
  return (
    <div className="admin-profile">

      <h1>👤 Admin Profile</h1>

      <div className="profile-card">

        <div className="profile-image">

          <img
            src={admin}
            alt="Admin"
          />

        </div>

        <div className="profile-details">

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              defaultValue="Restaurant Admin"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              defaultValue="admin@nexadine.com"
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="text"
              defaultValue="+91 9876543210"
            />
          </div>

          <div className="input-group">
            <label>Restaurant</label>
            <input
              type="text"
              defaultValue="GRAND NexaDine HOTEL & RESTAURANT"
            />
          </div>

          <div className="input-group">
            <label>Role</label>
            <input
              type="text"
              defaultValue="Administrator"
              disabled
            />
          </div>

          <button className="save-profile">
            💾 Update Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default AdminProfile;