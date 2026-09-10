import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove stored login information
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.clear();

    alert("Logged Out Successfully!");

    navigate("/login");
  };

  return (
    <div className="logout-page">

      <div className="logout-card">

        <h1>🚪 Logout</h1>

        <p>
          Are you sure you want to logout from your NexaDine account?
        </p>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Logout;