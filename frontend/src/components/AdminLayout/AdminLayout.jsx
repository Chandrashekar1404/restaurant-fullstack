import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./AdminLayout.css";


function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("fullName");

    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="admin-layout">

      {/* ================================
          FIXED SIDEBAR
      ================================= */}

      <aside className="admin-sidebar">

        <div className="admin-sidebar-logo">

          <div className="admin-logo-icon">
            🍽️
          </div>

          <div>
            <h2>NexaDine</h2>
            <span>ADMIN PANEL</span>
          </div>

        </div>

        <p className="admin-name">
          👨‍💼 Administrator
        </p>

        <nav className="admin-sidebar-nav">

          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `admin-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="admin-sidebar-icon">📊</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `admin-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="admin-sidebar-icon">📦</span>
            <span>Orders</span>
          </NavLink>

          <NavLink
            to="/admin/menu"
            className={({ isActive }) =>
              `admin-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="admin-sidebar-icon">🍽️</span>
            <span>Food Menu</span>
          </NavLink>

          <NavLink
            to="/admin/customers"
            className={({ isActive }) =>
              `admin-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="admin-sidebar-icon">👥</span>
            <span>Customers</span>
          </NavLink>

          <NavLink
            to="/admin/reservations"
            className={({ isActive }) =>
              `admin-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="admin-sidebar-icon">📅</span>
            <span>Reservations</span>
          </NavLink>

          <NavLink
            to="/admin/reports"
            className={({ isActive }) =>
              `admin-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="admin-sidebar-icon">📈</span>
            <span>Reports</span>
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `admin-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="admin-sidebar-icon">⚙️</span>
            <span>Settings</span>
          </NavLink>

          <NavLink
            to="/admin/profile"
            className={({ isActive }) =>
              `admin-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="admin-sidebar-icon">👤</span>
            <span>Admin Profile</span>
          </NavLink>

        </nav>

        <button
          className="admin-sidebar-logout"
          onClick={handleLogout}
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>

      </aside>


      {/* ================================
          ADMIN CONTENT
      ================================= */}

      <main className="admin-main-content">

        <div className="admin-page-container">

          <Outlet />

        </div>

      </main>

    </div>
  );
}

export default AdminLayout;