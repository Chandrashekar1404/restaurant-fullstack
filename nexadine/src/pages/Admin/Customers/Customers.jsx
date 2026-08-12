import { useEffect, useState } from "react";
import "./Customers.css";
import { getAllOrders } from "../../../services/orderService";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCustomers = async () => {
    try {
      setLoading(true);
      setError("");

      const orders = await getAllOrders();

      console.log("ADMIN CUSTOMERS - ORDERS:", orders);

      if (!Array.isArray(orders)) {
        setCustomers([]);
        return;
      }

      /*
       * Build customers from real orders.
       *
       * customerId is preferred.
       * If customerId is missing, email is used.
       */
      const customerMap = new Map();

      orders.forEach((order) => {
        const customerId =
          order.customerId ??
          order.email ??
          order.phone;

        if (!customerId) {
          return;
        }

        if (!customerMap.has(String(customerId))) {
          customerMap.set(String(customerId), {
            customerId: order.customerId,
            name: order.customerName || "Unknown Customer",
            phone: order.phone || "Not provided",
            email: order.email || "Not provided",
            address: order.address || "Not provided",
            totalOrders: 0,
            totalSpent: 0,
            lastOrderDate: order.orderDate || null,
          });
        }

        const customer = customerMap.get(String(customerId));

        customer.totalOrders += 1;

        customer.totalSpent +=
          Number(order.totalAmount) || 0;

        /*
         * Keep the newest customer information.
         */
        if (order.customerName) {
          customer.name = order.customerName;
        }

        if (order.phone) {
          customer.phone = order.phone;
        }

        if (order.email) {
          customer.email = order.email;
        }

        if (order.address) {
          customer.address = order.address;
        }

        if (
          order.orderDate &&
          (!customer.lastOrderDate ||
            new Date(order.orderDate) >
              new Date(customer.lastOrderDate))
        ) {
          customer.lastOrderDate = order.orderDate;
        }
      });

      setCustomers(
        Array.from(customerMap.values())
      );
    } catch (err) {
      console.error(
        "FAILED TO LOAD CUSTOMERS:",
        err
      );

      setError(
        "Unable to load customers from server."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div className="customers-page">

      {/* HEADER */}

      <div className="customers-header">

        <div>
          <h1>👥 Customers</h1>

          <p>
            Real customers who have placed orders
          </p>
        </div>

        <button
          type="button"
          onClick={loadCustomers}
        >
          🔄 Refresh
        </button>

      </div>


      {/* CUSTOMER COUNT */}

      <div className="customer-summary">

        <div className="customer-summary-card">
          <h2>{customers.length}</h2>
          <p>Total Customers</p>
        </div>

        <div className="customer-summary-card">
          <h2>
            {customers.reduce(
              (sum, customer) =>
                sum + customer.totalOrders,
              0
            )}
          </h2>

          <p>Total Orders</p>
        </div>

        <div className="customer-summary-card">
          <h2>
            ₹
            {customers
              .reduce(
                (sum, customer) =>
                  sum + customer.totalSpent,
                0
              )
              .toFixed(2)}
          </h2>

          <p>Total Customer Spending</p>
        </div>

      </div>


      {/* LOADING */}

      {loading && (
        <div className="customers-message">
          Loading real customers...
        </div>
      )}


      {/* ERROR */}

      {!loading && error && (
        <div className="customers-error">
          {error}
        </div>
      )}


      {/* NO CUSTOMERS */}

      {!loading &&
        !error &&
        customers.length === 0 && (
          <div className="customers-message">
            <h2>👥 No Customers Yet</h2>

            <p>
              Customers will appear here automatically
              after they place an order.
            </p>
          </div>
        )}


      {/* CUSTOMER TABLE */}

      {!loading &&
        !error &&
        customers.length > 0 && (

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Last Order</th>
                </tr>

              </thead>


              <tbody>

                {customers.map(
                  (customer, index) => (

                    <tr
                      key={
                        customer.customerId ||
                        customer.email ||
                        customer.phone
                      }
                    >

                      <td>
                        {index + 1}
                      </td>

                      <td>
                        <strong>
                          👤{" "}
                          {customer.name}
                        </strong>
                      </td>

                      <td>
                        {customer.phone}
                      </td>

                      <td>
                        {customer.email}
                      </td>

                      <td>
                        {customer.address}
                      </td>

                      <td>
                        {customer.totalOrders}
                      </td>

                      <td>
                        ₹
                        {customer.totalSpent.toFixed(
                          2
                        )}
                      </td>

                      <td>
                        {customer.lastOrderDate
                          ? new Date(
                              customer.lastOrderDate
                            ).toLocaleString()
                          : "—"}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        )}

    </div>
  );
}

export default Customers;