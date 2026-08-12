import { useEffect, useState } from "react";
import API from "../../../api/axiosConfig";
import "./Reports.css";

function Reports() {
  const [report, setReport] = useState({
    todaySales: 0,
    monthlyRevenue: 0,
    totalOrders: 0,
    todayOrderCount: 0,
    successfulPayments: 0,
    monthlyOrderCount: 0,
  });

  const [dailyReports, setDailyReports] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
  // LOAD REPORT
  // =====================================================

  const loadReports = async () => {
    try {
      setLoading(true);
      setError("");

      // ================================================
      // GET FULL REPORT
      // ================================================

      const reportResponse = await API.get(
        "/reports",
        {
          headers: getAuthHeaders(),
        }
      );

      console.log(
        "ADMIN REPORT:",
        reportResponse.data
      );

      setReport({
        todaySales:
          Number(
            reportResponse.data?.todaySales
          ) || 0,

        monthlyRevenue:
          Number(
            reportResponse.data?.monthlyRevenue
          ) || 0,

        totalOrders:
          Number(
            reportResponse.data?.totalOrders
          ) || 0,

        todayOrderCount:
          Number(
            reportResponse.data?.todayOrderCount
          ) || 0,

        successfulPayments:
          Number(
            reportResponse.data?.successfulPayments
          ) || 0,

        monthlyOrderCount:
          Number(
            reportResponse.data?.monthlyOrderCount
          ) || 0,
      });

      // ================================================
      // GET DAILY REPORT
      // ================================================

      const dailyResponse = await API.get(
        "/reports/daily",
        {
          headers: getAuthHeaders(),
        }
      );

      console.log(
        "DAILY REPORT:",
        dailyResponse.data
      );

      setDailyReports(
        dailyResponse.data || []
      );

    } catch (err) {
      console.error(
        "GET REPORTS ERROR:",
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
          "Unable to load reports."
      );

      setDailyReports([]);

    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOAD WHEN PAGE OPENS
  // =====================================================

  useEffect(() => {
    loadReports();
  }, []);

  // =====================================================
  // FORMAT MONEY
  // =====================================================

  const formatMoney = (amount) => {
    return Number(amount || 0).toLocaleString(
      "en-IN",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );
  };

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    if (!date) {
      return "N/A";
    }

    const parsedDate =
      new Date(date);

    if (Number.isNaN(
      parsedDate.getTime()
    )) {
      return date;
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="reports-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="reports-header">

        <div>

          <h1>
            📊 Reports
          </h1>

          <p>
            Restaurant sales and revenue overview
          </p>

        </div>

        <button
          type="button"
          className="refresh-report-button"
          onClick={loadReports}
          disabled={loading}
        >
          🔄 Refresh
        </button>

      </div>

      {/* =================================================
          ERROR
      ================================================= */}

      {error && (
        <div className="reports-error">
          ⚠️ {error}
        </div>
      )}

      {/* =================================================
          LOADING
      ================================================= */}

      {loading ? (

        <div className="reports-loading">
          ⏳ Loading reports...
        </div>

      ) : (

        <>

          {/* =============================================
              REPORT CARDS
          ============================================= */}

          <div className="reports-grid">

            {/* TODAY SALES */}

            <div className="report-card">

              <h2>
                💰 Today's Sales
              </h2>

              <h3>
                ₹{formatMoney(
                  report.todaySales
                )}
              </h3>

              <p>
                Sales from today's orders
              </p>

            </div>


            {/* MONTHLY REVENUE */}

            <div className="report-card">

              <h2>
                📈 Monthly Revenue
              </h2>

              <h3>
                ₹{formatMoney(
                  report.monthlyRevenue
                )}
              </h3>

              <p>
                Revenue generated this month
              </p>

            </div>


            {/* TOTAL ORDERS */}

            <div className="report-card">

              <h2>
                📦 Total Orders
              </h2>

              <h3>
                {report.totalOrders}
              </h3>

              <p>
                All orders received
              </p>

            </div>


            {/* TODAY ORDERS */}

            <div className="report-card">

              <h2>
                🛒 Today's Orders
              </h2>

              <h3>
                {report.todayOrderCount}
              </h3>

              <p>
                Orders received today
              </p>

            </div>


            {/* PAYMENTS */}

            <div className="report-card">

              <h2>
                💳 Payments
              </h2>

              <h3>
                ₹{formatMoney(
                  report.successfulPayments
                )}
              </h3>

              <p>
                Successful paid orders
              </p>

            </div>


            {/* MONTHLY ORDERS */}

            <div className="report-card">

              <h2>
                📅 Monthly Orders
              </h2>

              <h3>
                {report.monthlyOrderCount}
              </h3>

              <p>
                Orders received this month
              </p>

            </div>

          </div>


          {/* =============================================
              DAILY SALES REPORT
          ============================================= */}

          <div className="reports-section">

            <div className="reports-section-header">

              <div>

                <h2>
                  📋 Sales Report
                </h2>

                <p>
                  Daily restaurant sales and orders
                </p>

              </div>

            </div>


            <div className="report-table-wrapper">

              <table className="report-table">

                <thead>

                  <tr>

                    <th>
                      Date
                    </th>

                    <th>
                      Orders
                    </th>

                    <th>
                      Sales
                    </th>

                    <th>
                      Payments
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {dailyReports.length === 0 ? (

                    <tr>

                      <td
                        colSpan="4"
                        className="no-reports"
                      >
                        📭 No sales reports available
                      </td>

                    </tr>

                  ) : (

                    dailyReports
                      .slice()
                      .reverse()
                      .map((item, index) => (

                        <tr
                          key={`${item.date}-${index}`}
                        >

                          <td>
                            {formatDate(
                              item.date
                            )}
                          </td>

                          <td>
                            {item.orders || 0}
                          </td>

                          <td>
                            ₹
                            {formatMoney(
                              item.sales
                            )}
                          </td>

                          <td>
                            ₹
                            {formatMoney(
                              item.payments
                            )}
                          </td>

                        </tr>

                      ))

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </>

      )}

    </div>
  );
}

export default Reports;