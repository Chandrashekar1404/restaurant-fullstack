import { Routes, Route, Navigate } from "react-router-dom";
import RestaurantRegister from "../pages/RestaurantRegister/RestaurantRegister";
import ProtectedRoute from "./ProtectedRoute";



// =====================================================
// CUSTOMER LAYOUT
// =====================================================

import Layout from "../components/Layout/Layout";

// =====================================================
// CUSTOMER PAGES
// =====================================================

import MainPage from "../pages/Home/MainPage";
import Menu from "../pages/Menu/Menu";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";
import Billing from "../pages/Billing/Billing";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import Wishlist from "../pages/Wishlist/Wishlist";
import Profile from "../pages/Profile/Profile";
// =====================================================
// CUSTOMER AUTHENTICATION
// =====================================================

import Loginstoreadmin from "../pages/Loginstoreadmin/Loginstoreadmin";
import Register from "../pages/Register/Register";
import UserDashboard from "../pages/UserDashboard/UserDashboard";

// =====================================================
// RESERVATION
// =====================================================

import ReservationTable from "../components/reservationTable/reservationTable";

// =====================================================
// FEEDBACK
// =====================================================

import Feedback from "../pages/Feedback/Feedback";

// =====================================================
// WAITER DASHBOARD
// =====================================================

import WaiterLayout from "../pages/WaiterDashboard/WaiterLayout/WaiterLayout";
import WaiterDashboard from "../pages/WaiterDashboard/Dashboard/Dashboard";
import WaiterOrders from "../pages/WaiterDashboard/Orders/Orders";
import WaiterTables from "../pages/WaiterDashboard/Tables/Tables";
import WaiterProfile from "../pages/WaiterDashboard/Profile/Profile";

// =====================================================
// ADMIN
// =====================================================

// =====================================================
// ADMIN
// =====================================================

import AdminLogin from "../pages/Admin/Login/AdminLogin";
import AdminLayout from "../components/AdminLayout/AdminLayout";

import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Orders from "../pages/Admin/Orders/Orders";
import Customers from "../pages/Admin/Customers/Customers";
import MenuManagement from "../pages/Admin/MenuManagement/MenuManagement";
import Reservations from "../pages/Admin/Reservations/Reservations";
import Reports from "../pages/Admin/Reports/Reports";
import Settings from "../pages/Admin/Settings/Settings";
import AdminProfile from "../pages/Admin/AdminProfile/AdminProfile";

// =====================================================
// APP ROUTES
// =====================================================

function AppRoutes() {
  return (
    <Routes>

      {/* =================================================
          CUSTOMER WEBSITE
      ================================================= */}

      <Route element={<Layout />}>

        {/* HOME */}
        <Route
          path="/"
          element={<MainPage />}
        />

        {/* MENU */}
        <Route
          path="/menu"
          element={<Menu />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* BILLING */}
        <Route
          path="/billing"
          element={<Billing />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* ORDER SUCCESS */}
        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* RESERVATION */}
        <Route
          path="/reservation"
          element={<ReservationTable />}
        />

        {/* FEEDBACK */}
        <Route
          path="/feedback"
          element={<Feedback />}
        />

      </Route>


      {/* =================================================
          CUSTOMER AUTHENTICATION
      ================================================= */}

      <Route
        path="/login"
        element={<Loginstoreadmin />}
      />

      <Route
        path="/login-store-admin"
        element={<Loginstoreadmin />}
      />

     <Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/restaurant-register"
  element={<RestaurantRegister />}
/>


      {/* =================================================
          CUSTOMER DASHBOARD
      ================================================= */}

      <Route
        path="/user-dashboard"
        element={<UserDashboard />}
      />


      {/* =================================================
          ADMIN LOGIN
          
          IMPORTANT:
          Admin login is outside AdminLayout because
          the sidebar should NOT appear on login.
      ================================================= */}

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />


      {/* =================================================
          ADMIN PANEL
          
          AdminLayout stays mounted while navigating
          between Dashboard / Orders / Menu / Customers /
          Reservations / Reports / Settings / Profile.

          The sidebar is therefore FIXED and does not
          disappear when changing pages.
      ================================================= */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        {/* =================================================
            /admin
            redirects to /admin/dashboard
        ================================================= */}

        <Route
          index
          element={
            <Navigate
              to="dashboard"
              replace
            />
          }
        />


        {/* =================================================
            ADMIN DASHBOARD
        ================================================= */}

        <Route
          path="dashboard"
          element={<Dashboard />}
        />


        {/* =================================================
            ADMIN ORDERS
        ================================================= */}

        <Route
          path="orders"
          element={<Orders />}
        />


        {/* =================================================
            ADMIN CUSTOMERS
        ================================================= */}

        <Route
          path="customers"
          element={<Customers />}
        />


        {/* =================================================
            ADMIN FOOD MENU
        ================================================= */}

        <Route
          path="menu"
          element={<MenuManagement />}
        />


        {/* =================================================
            ADMIN RESERVATIONS
        ================================================= */}

        <Route
          path="reservations"
          element={<Reservations />}
        />


        {/* =================================================
            ADMIN REPORTS
        ================================================= */}

        <Route
          path="reports"
          element={<Reports />}
        />


        {/* =================================================
            ADMIN ANALYTICS
        ================================================= */}

        <Route
          path="analytics"
          element={<Reports />}
        />


        {/* =================================================
            ADMIN SETTINGS
        ================================================= */}

        <Route
          path="settings"
          element={<Settings />}
        />


        {/* =================================================
            ADMIN PROFILE
        ================================================= */}

        <Route
          path="profile"
          element={<AdminProfile />}
        />


        {/* =================================================
            ADMIN COUPONS
        ================================================= */}

        <Route
          path="coupons"
          element={<MenuManagement />}
        />

      </Route>


      {/* =================================================
          WAITER DASHBOARD
      ================================================= */}

      <Route
        path="/waiter/dashboard"
        element={
          <WaiterLayout>
            <WaiterDashboard />
          </WaiterLayout>
        }
      />


      {/* =================================================
          WAITER ORDERS
      ================================================= */}

      <Route
        path="/waiter/orders"
        element={
          <WaiterLayout>
            <WaiterOrders />
          </WaiterLayout>
        }
      />


      {/* =================================================
          WAITER TABLES
      ================================================= */}

      <Route
        path="/waiter/tables"
        element={
          <WaiterLayout>
            <WaiterTables />
          </WaiterLayout>
        }
      />


      {/* =================================================
          WAITER PROFILE
      ================================================= */}

      <Route
        path="/waiter/profile"
        element={
          <WaiterLayout>
            <WaiterProfile />
          </WaiterLayout>
        }
      />


      {/* =================================================
          FALLBACK
          
          Unknown customer URL → Home
          Unknown admin URLs are handled by the
          AdminLayout routes above.
      ================================================= */}

      <Route
        path="*"
        element={<MainPage />}
      />

    </Routes>
  );
}

export default AppRoutes;