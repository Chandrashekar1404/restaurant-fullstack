import "./Profile.css";

function Profile() {
  return (
    <div className="profile">

      <div className="profile-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User"
        />

        <h2>Guest User</h2>

        <p>guest@nexadine.com</p>

        <button>Edit Profile</button>

      </div>

    </div>
  );
}

export default Profile;