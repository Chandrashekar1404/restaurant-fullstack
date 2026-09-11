import { useEffect, useState } from "react";
import "./PaymentHistory.css";
import API from "../../../api/axiosConfig";

function PaymentHistory() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPaymentHistory();

    // Refresh payment history every 10 seconds
    const interval = setInterval(() => {
      loadPaymentHistory();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // ============================================
  // LOAD PAYMENT HISTORY
  // ============================================

  const loadPaymentHistory = async () => {
    const customerId = localStorage.getItem("userId");

    if (!customerId) {
      setPayments([]);
      setLoading(false);
      return;
    }

    try {
      const response = await API.get(
        `/orders/customer/${customerId}`
      );

      const data = response.data;

      console.log(
        "CUSTOMER PAYMENT HISTORY:",
        data
      );

      setPayments(
        Array.isArray(data) ? data : []
      );
    } catch (error) {
      console.error(
        "PAYMENT HISTORY ERROR:",
        error
      );

      setPayments([]);
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // FORMAT DATE
  // ============================================

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    try {
      return new Date(date).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );
    } catch {
      return "-";
    }
  };

  // ============================================
  // PAYMENT STATUS CLASS
  // ============================================

  const getPaymentStatusClass = (status) => {
    if (!status) {
      return "pending";
    }

    return status
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  // ============================================
  // LOADING
  // ============================================

  if (loading) {
    return (
      <div className="payment-history">
        <div className="payment-header">
          <h1>💳 Payment History</h1>

          <button
            type="button"
            className="payment-refresh-btn"
            onClick={loadPaymentHistory}
          >
            🔄 Refresh
          </button>
        </div>

        <div className="payment-loading">
          <div className="loading-icon">
            💳
          </div>

          <p>
            Loading payment history...
          </p>
        </div>
      </div>
    );
  }

  // ============================================
  // NO PAYMENTS
  // ============================================

  if (payments.length === 0) {
    return (
      <div className="payment-history">
        <div className="payment-header">
          <div>
            <h1>💳 Payment History</h1>

            <p>
              View your previous order payments.
            </p>
          </div>

          <button
            type="button"
            className="payment-refresh-btn"
            onClick={loadPaymentHistory}
          >
            🔄 Refresh
          </button>
        </div>

        <div className="no-payments">
          <div className="no-payment-icon">
            💳
          </div>

          <h2>
            No Payment History
          </h2>

          <p>
            Your completed payments will appear
            here after you place an order.
          </p>
        </div>
      </div>
    );
  }

  // ============================================
  // PAYMENT HISTORY
  // ============================================

  return (
    <div className="payment-history">

      {/* HEADER */}

      <div className="payment-header">

        <div>
          <h1>
            💳 Payment History
          </h1>

          <p>
            View all your order payments and
            payment status.
          </p>
        </div>

        <button
          type="button"
          className="payment-refresh-btn"
          onClick={loadPaymentHistory}
        >
          🔄 Refresh
        </button>

      </div>

      {/* PAYMENT TABLE */}

      <div className="payment-table-container">

        <table className="payment-table">

          <thead>
            <tr>

              <th>
                Order ID
              </th>

              <th>
                Date
              </th>

              <th>
                Payment Method
              </th>

              <th>
                Amount
              </th>

              <th>
                Payment Status
              </th>

              <th>
                Order Status
              </th>

            </tr>
          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr key={payment.id}>

                {/* ORDER ID */}

                <td>
                  <strong>
                    #{payment.id}
                  </strong>
                </td>

                {/* DATE */}

                <td>
                  {formatDate(
                    payment.orderDate ||
                      payment.createdAt
                  )}
                </td>

                {/* PAYMENT METHOD */}

                <td>
                  {payment.paymentMethod ||
                    "Online Payment"}
                </td>

                {/* AMOUNT */}

                <td>

                  <strong className="payment-amount">
                    ₹
                    {Number(
                      payment.totalAmount || 0
                    ).toLocaleString("en-IN")}
                  </strong>

                </td>

                {/* PAYMENT STATUS */}

                <td>

                  <span
                    className={`payment-status ${getPaymentStatusClass(
                      payment.paymentStatus
                    )}`}
                  >
                    {payment.paymentStatus ||
                      "Pending"}
                  </span>

                </td>

                {/* ORDER STATUS */}

                <td>

                  <span
                    className={`order-status ${getPaymentStatusClass(
                      payment.orderStatus
                    )}`}
                  >
                    {payment.orderStatus ||
                      "Pending"}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PaymentHistory;