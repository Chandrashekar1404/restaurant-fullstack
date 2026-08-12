import { useEffect, useState } from "react";
import "./Tables.css";

function Tables() {
  const [tables, setTables] = useState([
    {
      id: 1,
      number: 1,
      capacity: 2,
      status: "Available",
      customer: "",
    },
    {
      id: 2,
      number: 2,
      capacity: 4,
      status: "Occupied",
      customer: "Rahul",
    },
    {
      id: 3,
      number: 3,
      capacity: 4,
      status: "Available",
      customer: "",
    },
    {
      id: 4,
      number: 4,
      capacity: 6,
      status: "Reserved",
      customer: "Priya",
    },
    {
      id: 5,
      number: 5,
      capacity: 2,
      status: "Available",
      customer: "",
    },
    {
      id: 6,
      number: 6,
      capacity: 4,
      status: "Occupied",
      customer: "Arjun",
    },
    {
      id: 7,
      number: 7,
      capacity: 6,
      status: "Available",
      customer: "",
    },
    {
      id: 8,
      number: 8,
      capacity: 8,
      status: "Reserved",
      customer: "Sneha",
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState("All");

  // ============================================
  // UPDATE TABLE STATUS
  // ============================================

  const updateTableStatus = (id, status) => {
    setTables((previousTables) =>
      previousTables.map((table) =>
        table.id === id
          ? {
              ...table,
              status,
              customer:
                status === "Available"
                  ? ""
                  : table.customer,
            }
          : table
      )
    );
  };

  // ============================================
  // AUTO REFRESH PLACEHOLDER
  // ============================================

  useEffect(() => {
    // Later you can replace this with:
    // API call to load real table status from backend.

    const interval = setInterval(() => {
      console.log("Checking latest table status...");
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // ============================================
  // STATISTICS
  // ============================================

  const availableTables = tables.filter(
    (table) => table.status === "Available"
  ).length;

  const occupiedTables = tables.filter(
    (table) => table.status === "Occupied"
  ).length;

  const reservedTables = tables.filter(
    (table) => table.status === "Reserved"
  ).length;

  // ============================================
  // FILTER TABLES
  // ============================================

  const filteredTables =
    selectedFilter === "All"
      ? tables
      : tables.filter(
          (table) => table.status === selectedFilter
        );

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="waiter-tables-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="tables-header">

        <div>
          <h1>Restaurant Tables</h1>

          <p>
            Manage restaurant tables and monitor
            their current status.
          </p>
        </div>

        <div className="waiter-date">
          📅 Today
        </div>

      </div>


      {/* =========================================
          STATISTICS
      ========================================= */}

      <div className="table-statistics">

        {/* AVAILABLE */}

        <div className="table-stat-card available-stat">

          <div className="stat-icon">
            🟢
          </div>

          <div>
            <span>Available</span>

            <strong>
              {availableTables}
            </strong>
          </div>

        </div>


        {/* OCCUPIED */}

        <div className="table-stat-card occupied-stat">

          <div className="stat-icon">
            🔴
          </div>

          <div>
            <span>Occupied</span>

            <strong>
              {occupiedTables}
            </strong>
          </div>

        </div>


        {/* RESERVED */}

        <div className="table-stat-card reserved-stat">

          <div className="stat-icon">
            🟡
          </div>

          <div>
            <span>Reserved</span>

            <strong>
              {reservedTables}
            </strong>
          </div>

        </div>


        {/* TOTAL */}

        <div className="table-stat-card total-stat">

          <div className="stat-icon">
            🪑
          </div>

          <div>
            <span>Total Tables</span>

            <strong>
              {tables.length}
            </strong>
          </div>

        </div>

      </div>


      {/* =========================================
          TABLE SECTION
      ========================================= */}

      <div className="tables-section">

        {/* SECTION HEADER */}

        <div className="section-header">

          <div>

            <h2>
              Restaurant Tables
            </h2>

            <p>
              Select a table to update its status.
            </p>

          </div>


          {/* FILTER */}

          <div className="table-filter">

            <button
              className={
                selectedFilter === "All"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedFilter("All")
              }
            >
              All
            </button>

            <button
              className={
                selectedFilter === "Available"
                  ? "active available-filter"
                  : ""
              }
              onClick={() =>
                setSelectedFilter("Available")
              }
            >
              🟢 Available
            </button>

            <button
              className={
                selectedFilter === "Occupied"
                  ? "active occupied-filter"
                  : ""
              }
              onClick={() =>
                setSelectedFilter("Occupied")
              }
            >
              🔴 Occupied
            </button>

            <button
              className={
                selectedFilter === "Reserved"
                  ? "active reserved-filter"
                  : ""
              }
              onClick={() =>
                setSelectedFilter("Reserved")
              }
            >
              🟡 Reserved
            </button>

          </div>

        </div>


        {/* =========================================
            LEGEND
        ========================================= */}

        <div className="table-legend">

          <span>
            <i className="legend-dot available"></i>
            Available
          </span>

          <span>
            <i className="legend-dot occupied"></i>
            Occupied
          </span>

          <span>
            <i className="legend-dot reserved"></i>
            Reserved
          </span>

        </div>


        {/* =========================================
            TABLE GRID
        ========================================= */}

        {filteredTables.length === 0 ? (

          <div className="no-tables">

            <div>
              🪑
            </div>

            <h3>
              No Tables Found
            </h3>

            <p>
              No tables match the selected status.
            </p>

          </div>

        ) : (

          <div className="tables-grid">

            {filteredTables.map((table) => (

              <div
                className={`restaurant-table ${table.status.toLowerCase()}`}
                key={table.id}
              >

                {/* =================================
                    TABLE HEADER
                ================================= */}

                <div className="table-top">

                  <div className="table-number">
                    Table {table.number}
                  </div>

                  <span
                    className={`status-badge ${table.status.toLowerCase()}`}
                  >
                    {table.status}
                  </span>

                </div>


                {/* =================================
                    TABLE ICON
                ================================= */}

                <div className="table-image">
                  🪑
                </div>


                {/* =================================
                    TABLE INFORMATION
                ================================= */}

                <div className="table-information">

                  <div className="table-info-row">

                    <span>
                      Capacity
                    </span>

                    <strong>
                      👥 {table.capacity} Persons
                    </strong>

                  </div>


                  <div className="table-info-row">

                    <span>
                      Customer
                    </span>

                    <strong>
                      {table.customer ||
                        "No Customer"}
                    </strong>

                  </div>

                </div>


                {/* =================================
                    ACTIONS
                ================================= */}

                <div className="table-actions">

                  {table.status !== "Available" && (

                    <button
                      className="available-btn"
                      onClick={() =>
                        updateTableStatus(
                          table.id,
                          "Available"
                        )
                      }
                    >
                      🟢 Mark Available
                    </button>

                  )}


                  {table.status !== "Occupied" && (

                    <button
                      className="occupied-btn"
                      onClick={() =>
                        updateTableStatus(
                          table.id,
                          "Occupied"
                        )
                      }
                    >
                      🔴 Occupy
                    </button>

                  )}


                  {table.status !== "Reserved" && (

                    <button
                      className="reserved-btn"
                      onClick={() =>
                        updateTableStatus(
                          table.id,
                          "Reserved"
                        )
                      }
                    >
                      🟡 Reserve
                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Tables;