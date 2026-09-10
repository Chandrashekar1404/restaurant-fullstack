import "./Reports.css";

function Reports() {
  return (
    <div className="reports">

      <h1>Restaurant Reports</h1>

      <div className="report-cards">

        <div className="report-card">
          <h2>150</h2>
          <p>Total Orders</p>
        </div>

        <div className="report-card">
          <h2>$5,240</h2>
          <p>Total Revenue</p>
        </div>

        <div className="report-card">
          <h2>89</h2>
          <p>Total Customers</p>
        </div>

        <div className="report-card">
          <h2>25</h2>
          <p>Menu Items</p>
        </div>

      </div>

      <div className="report-table">

        <h2>Monthly Sales Report</h2>

        <table>

          <thead>
            <tr>
              <th>Month</th>
              <th>Orders</th>
              <th>Revenue</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>January</td>
              <td>120</td>
              <td>$3,200</td>
            </tr>

            <tr>
              <td>February</td>
              <td>145</td>
              <td>$4,100</td>
            </tr>

            <tr>
              <td>March</td>
              <td>170</td>
              <td>$5,240</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Reports;