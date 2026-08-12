import { NavLink, useNavigate } from "react-router-dom";
import "./WaiterSidebar.css";

function WaiterSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("waiter");
    localStorage.removeItem("waiterToken");

    navigate("/login");
  };

  return (
    <aside className="waiter-sidebar">

      {/* =========================
          LOGO
      ========================= */}
      <div className="waiter-logo">
        <div className="logo-icon">🍽️</div>

        <div>
          <h2>NexaDine</h2>
          <span>Waiter Panel</span>
        </div>
      </div>

      {/* =========================
          NAVIGATION
      ========================= */}
      <div className="waiter-menu-title">
        MAIN MENU
      </div>

      <nav className="waiter-nav">

        <NavLink
          to="/waiter/dashboard"
          className={({ isActive }) =>
            isActive ? "waiter-link active" : "waiter-link"
          }
        >
          <span className="waiter-icon">📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/waiter/orders"
          className={({ isActive }) =>
            isActive ? "waiter-link active" : "waiter-link"
          }
        >
          <span className="waiter-icon">🍽️</span>
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/waiter/tables"
          className={({ isActive }) =>
            isActive ? "waiter-link active" : "waiter-link"
          }
        >
          <span className="waiter-icon">🪑</span>
          <span>Tables</span>
        </NavLink>

        <NavLink
          to="/waiter/profile"
          className={({ isActive }) =>
            isActive ? "waiter-link active" : "waiter-link"
          }
        >
          <span className="waiter-icon">👤</span>
          <span>Profile</span>
        </NavLink>

      </nav>

      {/* =========================
          QUICK INFO
      ========================= */}
      <div className="waiter-status-box">

        <div className="status-dot"></div>

        <div>
          <strong>Online</strong>
          <span>Ready to serve</span>
        </div>

      </div>

      {/* =========================
          BOTTOM
      ========================= */}
      <div className="waiter-sidebar-bottom">

        <button
          className="waiter-logout"
          onClick={handleLogout}
        >
          <span className="logout-icon">🚪</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default WaiterSidebar;