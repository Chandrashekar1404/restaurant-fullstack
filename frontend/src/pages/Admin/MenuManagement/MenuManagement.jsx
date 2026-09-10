import { useEffect, useState } from "react";
import API from "../../../api/axiosConfig";
import "./MenuManagement.css";

function MenuManagement() {
  const [menuItems, setMenuItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    status: "Available",
  });

  // =====================================================
  // AUTH HEADERS
  // =====================================================

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return {};
    }

    return {
      Authorization: `Bearer ${token}`,
    };
  };

  // =====================================================
  // GET ALL MENU ITEMS
  // =====================================================

  const loadMenu = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/menu", {
        headers: getAuthHeaders(),
      });

      console.log("MENU FROM DATABASE:", response.data);

      setMenuItems(response.data || []);
    } catch (err) {
      console.error("GET MENU ERROR:", err);

      console.error(
        "STATUS:",
        err.response?.status
      );

      console.error(
        "RESPONSE:",
        err.response?.data
      );

      setError(
        err.response?.data?.message ||
          "Unable to load food menu."
      );

      setMenuItems([]);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOAD MENU WHEN PAGE OPENS
  // =====================================================

  useEffect(() => {
    loadMenu();
  }, []);

  // =====================================================
  // FORM CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // RESET FORM
  // =====================================================

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      category: "",
      status: "Available",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // =====================================================
  // OPEN ADD FOOD FORM
  // =====================================================

  const handleAddNew = () => {
    setEditingId(null);

    setForm({
      name: "",
      price: "",
      category: "",
      status: "Available",
    });

    setShowForm(true);
  };

  // =====================================================
  // SAVE / UPDATE FOOD
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ---------------------------------------------------
    // VALIDATION
    // ---------------------------------------------------

    if (!form.name.trim()) {
      alert("Please enter food name.");
      return;
    }

    if (
      form.price === "" ||
      Number(form.price) < 0
    ) {
      alert("Please enter a valid price.");
      return;
    }

    if (!form.category.trim()) {
      alert("Please enter food category.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const menuData = {
        name: form.name.trim(),
        price: Number(form.price),
        category: form.category.trim(),
        status: form.status,
      };

      console.log(
        "MENU DATA BEING SENT:",
        menuData
      );

      // =================================================
      // UPDATE EXISTING FOOD
      // =================================================

      if (editingId !== null) {
        const response = await API.put(
          `/menu/${editingId}`,
          menuData,
          {
            headers: getAuthHeaders(),
          }
        );

        console.log(
          "MENU UPDATED:",
          response.data
        );

        alert(
          "Food item updated successfully."
        );
      }

      // =================================================
      // ADD NEW FOOD
      // =================================================

      else {
        const response = await API.post(
          "/menu",
          menuData,
          {
            headers: getAuthHeaders(),
          }
        );

        console.log(
          "NEW FOOD SAVED:",
          response.data
        );

        alert(
          "New food item added successfully."
        );
      }

      // -------------------------------------------------
      // RESET FORM
      // -------------------------------------------------

      resetForm();

      // -------------------------------------------------
      // GET FRESH DATA FROM DATABASE
      // -------------------------------------------------

      await loadMenu();

    } catch (err) {
      console.error(
        "SAVE MENU ERROR:",
        err
      );

      console.error(
        "STATUS:",
        err.response?.status
      );

      console.error(
        "RESPONSE:",
        err.response?.data
      );

      setError(
        err.response?.data?.message ||
          err.response?.data ||
          "Unable to save food item."
      );

      alert(
        "Food item could not be saved."
      );
    } finally {
      setSaving(false);
    }
  };

  // =====================================================
  // EDIT FOOD
  // =====================================================

  const handleEdit = (item) => {
    setEditingId(item.id);

    setForm({
      name: item.name || "",
      price:
        item.price !== null &&
        item.price !== undefined
          ? String(item.price)
          : "",
      category: item.category || "",
      status:
        item.status || "Available",
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // DELETE FOOD
  // =====================================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this food item?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");

      await API.delete(`/menu/${id}`, {
        headers: getAuthHeaders(),
      });

      alert(
        "Food item deleted successfully."
      );

      await loadMenu();

    } catch (err) {
      console.error(
        "DELETE MENU ERROR:",
        err
      );

      console.error(
        "STATUS:",
        err.response?.status
      );

      console.error(
        "RESPONSE:",
        err.response?.data
      );

      setError(
        err.response?.data?.message ||
          "Unable to delete food item."
      );
    }
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="menu-management">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="menu-header">

        <div>
          <h1>🍽️ Menu Management</h1>

          <p>
            Add, edit and manage restaurant
            food items
          </p>
        </div>

        <div className="menu-header-actions">

          <button
            type="button"
            className="refresh-menu-button"
            onClick={loadMenu}
            disabled={loading}
          >
            🔄 Refresh
          </button>

          <button
            type="button"
            className="add-food-button"
            onClick={handleAddNew}
          >
            ➕ Add New Food
          </button>

        </div>

      </div>

      {/* =================================================
          ERROR
      ================================================= */}

      {error && (
        <div className="menu-error">
          ⚠️ {error}
        </div>
      )}

      {/* =================================================
          ADD / EDIT FORM
      ================================================= */}

      {showForm && (
        <div className="menu-form-section">

          <div className="menu-form-header">

            <div>
              <h2>
                {editingId !== null
                  ? "✏️ Edit Food Item"
                  : "➕ Add New Food"}
              </h2>

              <p>
                Enter the food details below.
              </p>
            </div>

            <button
              type="button"
              className="close-form-button"
              onClick={resetForm}
            >
              ✕
            </button>

          </div>

          <form
            className="menu-form"
            onSubmit={handleSubmit}
          >

            {/* FOOD NAME */}

            <div className="form-group">

              <label>
                Food Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Example: Chicken Biryani"
                value={form.name}
                onChange={handleChange}
              />

            </div>

            {/* PRICE */}

            <div className="form-group">

              <label>
                Price
              </label>

              <input
                type="number"
                name="price"
                placeholder="Example: 299"
                min="0"
                step="0.01"
                value={form.price}
                onChange={handleChange}
              />

            </div>

            {/* CATEGORY */}

            <div className="form-group">

              <label>
                Category
              </label>

              <input
                type="text"
                name="category"
                placeholder="Example: Biryani"
                value={form.category}
                onChange={handleChange}
              />

            </div>

            {/* STATUS */}

            <div className="form-group">

              <label>
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >

                <option value="Available">
                  Available
                </option>

                <option value="Unavailable">
                  Unavailable
                </option>

              </select>

            </div>

            {/* FORM BUTTONS */}

            <div className="form-actions">

              <button
                type="button"
                className="cancel-button"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-food-button"
                disabled={saving}
              >

                {saving
                  ? "Saving..."
                  : editingId !== null
                  ? "💾 Update Food"
                  : "➕ Save Food"}

              </button>

            </div>

          </form>

        </div>
      )}

      {/* =================================================
          MENU TABLE
      ================================================= */}

      <div className="menu-table-section">

        <div className="menu-table-header">

          <div>
            <h2>
              🍴 Restaurant Food Menu
            </h2>

            <p>
              {menuItems.length} food item
              {menuItems.length !== 1
                ? "s"
                : ""}{" "}
              in database
            </p>
          </div>

        </div>

        <div className="menu-table-wrapper">

          <table className="menu-table">

            <thead>

              <tr>
                <th>ID</th>
                <th>Food</th>
                <th>Price</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {/* LOADING */}

              {loading ? (

                <tr>

                  <td
                    colSpan="6"
                    className="menu-empty"
                  >
                    ⏳ Loading menu...
                  </td>

                </tr>

              ) : menuItems.length === 0 ? (

                /* EMPTY */

                <tr>

                  <td
                    colSpan="6"
                    className="menu-empty"
                  >

                    📭 No food items found.

                    <br />

                    <button
                      type="button"
                      onClick={handleAddNew}
                      className="empty-add-button"
                    >
                      ➕ Add Your First Food
                    </button>

                  </td>

                </tr>

              ) : (

                /* MENU ITEMS */

                menuItems.map((item) => (

                  <tr key={item.id}>

                    <td>
                      #{item.id}
                    </td>

                    <td className="food-name">

                      🍽️{" "}
                      {item.name ||
                        "Unnamed Food"}

                    </td>

                    <td>

                      ₹
                      {Number(
                        item.price || 0
                      ).toFixed(2)}

                    </td>

                    <td>
                      {item.category ||
                        "N/A"}
                    </td>

                    <td>

                      <span
                        className={
                          String(
                            item.status ||
                              "Available"
                          ).toLowerCase() ===
                          "available"
                            ? "menu-status available"
                            : "menu-status unavailable"
                        }
                      >

                        {item.status ||
                          "Available"}

                      </span>

                    </td>

                    <td>

                      <div className="menu-actions">

                        <button
                          type="button"
                          className="edit-button"
                          onClick={() =>
                            handleEdit(item)
                          }
                        >
                          ✏️ Edit
                        </button>

                        <button
                          type="button"
                          className="delete-button"
                          onClick={() =>
                            handleDelete(
                              item.id
                            )
                          }
                        >
                          🗑️ Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default MenuManagement;