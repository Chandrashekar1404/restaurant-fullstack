import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "🏠",
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: "📦",
    },
    {
      name: "Customers",
      path: "/admin/customers",
      icon: "👥",
    },
    {
      name: "Menu Management",
      path: "/admin/menu",
      icon: "🍽️",
    },
    {
      name: "Reservations",
      path: "/admin/reservations",
      icon: "📅",
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: "📊",
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: "⚙️",
    },
    {
      name: "Admin Profile",
      path: "/admin/profile",
      icon: "👤",
    },

    // Additional admin pages
    {
      name: "Billing",
      path: "/admin/billing",
      icon: "💳",
    },
    {
      name: "Invoices",
      path: "/admin/invoices",
      icon: "🧾",
    },
    {
      name: "Coupons",
      path: "/admin/coupons",
      icon: "🎁",
    },
    {
      name: "Reviews",
      path: "/admin/reviews",
      icon: "⭐",
    },
    {
      name: "Employees",
      path: "/admin/employees",
      icon: "👨‍🍳",
    },
    {
      name: "Kitchen",
      path: "/admin/kitchen",
      icon: "🍳",
    },
    {
      name: "Inventory",
      path: "/admin/inventory",
      icon: "📦",
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: "📈",
    },
  ];

  return (
    <div className="admin-sidebar">

      {/* =========================================
          LOGO
      ========================================= */}

      <div className="sidebar-logo">
        <h2>🍽️ GRAND NexaDine</h2>

        <p>Admin Panel</p>
      </div>

      {/* =========================================
          MENU
      ========================================= */}

      <ul className="sidebar-menu">

        {menuItems.map((item) => {

          const isActive =
            location.pathname === item.path;

          return (
            <li
              key={item.path}
              className={isActive ? "active" : ""}
            >

              <Link to={item.path}>

                <span className="sidebar-icon">
                  {item.icon}
                </span>

                <span className="sidebar-text">
                  {item.name}
                </span>

              </Link>

            </li>
          );
        })}

      </ul>

      {/* =========================================
          FOOTER / LOGOUT
      ========================================= */}

      <div className="sidebar-footer">

        <Link
          to="/admin/login"
          className="logout-btn"
        >
          <span>🚪</span>
          <span>Logout</span>
        </Link>

      </div>

    </div>
  );
}

export default AdminSidebar;