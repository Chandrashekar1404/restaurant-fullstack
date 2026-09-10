import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { saveOrder } from "../../services/orderService";
import { openRazorpay } from "../../utils/razorpay";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cart, total, clearCart } = useCart();

  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    payment: "razorpay",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // PRICE CALCULATION
  // =====================================================

  const subtotal = Number(total) || 0;

  const gst = subtotal * 0.05;

  const delivery = subtotal > 0 ? 40 : 0;

  const grandTotal = subtotal + gst + delivery;

  // =====================================================
  // GET LOGGED-IN CUSTOMER ID
  // =====================================================

  const getCustomerId = () => {
    const storedUserId = localStorage.getItem("userId");

    if (!storedUserId) {
      return null;
    }

    const parsedUserId = Number(storedUserId);

    if (Number.isNaN(parsedUserId)) {
      return null;
    }

    return parsedUserId;
  };

  // =====================================================
  // HANDLE PAYMENT / ORDER
  // =====================================================

  const handlePayment = async () => {
    // ---------------------------------------------------
    // PREVENT DOUBLE CLICK
    // ---------------------------------------------------

    if (isProcessing) {
      return;
    }

    // ---------------------------------------------------
    // VALIDATE CUSTOMER
    // ---------------------------------------------------

    if (
      !customer.fullName.trim() ||
      !customer.phone.trim() ||
      !customer.email.trim() ||
      !customer.address.trim()
    ) {
      alert("Please fill all customer details.");
      return;
    }

    // ---------------------------------------------------
    // VALIDATE CART
    // ---------------------------------------------------

    if (!cart || cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // ---------------------------------------------------
    // GET CUSTOMER ID
    // ---------------------------------------------------

    const customerId = getCustomerId();

    if (!customerId) {
      alert("Customer session not found. Please login again.");

      navigate("/login");

      return;
    }

    // ---------------------------------------------------
    // CREATE FOOD ITEMS STRING
    // ---------------------------------------------------

    const foodItems = cart
      .map((item) => {
        const itemName = item.name || "Unknown Item";
        const itemQuantity = Number(item.quantity) || 0;

        return `${itemName} x ${itemQuantity}`;
      })
      .join(", ");

    // ---------------------------------------------------
    // TOTAL QUANTITY
    // ---------------------------------------------------

    const quantity = cart.reduce(
      (sum, item) =>
        sum + Number(item.quantity || 0),
      0
    );

    // ---------------------------------------------------
    // PAYMENT INFORMATION
    // ---------------------------------------------------

    const paymentMethod =
      customer.payment === "cod"
        ? "Cash On Delivery"
        : "Razorpay";

    const paymentStatus =
      customer.payment === "cod"
        ? "Pending"
        : "Paid";

    // ---------------------------------------------------
    // CREATE FRESH ORDER
    // ---------------------------------------------------

    const orderData = {
      customerId: customerId,

      customerName: customer.fullName.trim(),

      phone: customer.phone.trim(),

      email: customer.email.trim(),

      address: customer.address.trim(),

      foodItems: foodItems,

      quantity: quantity,

      totalAmount: Number(
        grandTotal.toFixed(2)
      ),

      paymentMethod: paymentMethod,

      paymentStatus: paymentStatus,
    };

    // ---------------------------------------------------
    // DEBUG
    // ---------------------------------------------------

    console.log(
      "========================================"
    );

    console.log(
      "NEW CUSTOMER ORDER"
    );

    console.log(
      "========================================"
    );

    console.log(
      "Customer ID:",
      orderData.customerId
    );

    console.log(
      "Customer Name:",
      orderData.customerName
    );

    console.log(
      "Phone:",
      orderData.phone
    );

    console.log(
      "Email:",
      orderData.email
    );

    console.log(
      "Address:",
      orderData.address
    );

    console.log(
      "Food:",
      orderData.foodItems
    );

    console.log(
      "Quantity:",
      orderData.quantity
    );

    console.log(
      "Total:",
      orderData.totalAmount
    );

    console.log(
      "Payment:",
      orderData.paymentMethod
    );

    console.log(
      "Payment Status:",
      orderData.paymentStatus
    );

    console.log(
      "========================================"
    );

    try {
      setIsProcessing(true);

      // =================================================
      // CASH ON DELIVERY
      // =================================================

      if (customer.payment === "cod") {
        console.log(
          "Saving COD order..."
        );

        const savedOrder =
          await saveOrder(orderData);

        console.log(
          "COD ORDER SAVED:",
          savedOrder
        );

        clearCart();

        navigate(
          "/order-success",
          {
            state: {
              order: savedOrder,
            },
          }
        );

        return;
      }

      // =================================================
      // RAZORPAY
      // =================================================

      console.log(
        "Opening Razorpay..."
      );

      const payment =
        await openRazorpay(
          grandTotal,
          customer
        );

      // -------------------------------------------------
      // PAYMENT CANCELLED / FAILED
      // -------------------------------------------------

      if (
        !payment ||
        !payment.success
      ) {
        console.log(
          "Payment cancelled or failed."
        );

        return;
      }

      // -------------------------------------------------
      // SAVE ONLY AFTER PAYMENT SUCCESS
      // -------------------------------------------------

      console.log(
        "Payment successful."
      );

      console.log(
        "Saving Razorpay order..."
      );

      const savedOrder =
        await saveOrder(orderData);

      console.log(
        "RAZORPAY ORDER SAVED:",
        savedOrder
      );

      // -------------------------------------------------
      // CLEAR CART
      // -------------------------------------------------

      clearCart();

      // -------------------------------------------------
      // ORDER SUCCESS
      // -------------------------------------------------

      navigate(
        "/order-success",
        {
          state: {
            order: savedOrder,
          },
        }
      );

    } catch (error) {
      console.error(
        "================================"
      );

      console.error(
        "ORDER FAILED"
      );

      console.error(
        "================================"
      );

      console.error(error);

      if (error.response) {
        console.error(
          "HTTP STATUS:",
          error.response.status
        );

        console.error(
          "SERVER RESPONSE:",
          error.response.data
        );
      }

      alert(
        "Order could not be placed. Please try again."
      );

    } finally {
      setIsProcessing(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* =============================================
            CUSTOMER DETAILS
        ============================================== */}

        <div className="customer-details">

          <h2>
            Customer Details
          </h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={customer.fullName}
            onChange={handleChange}
            disabled={isProcessing}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={customer.phone}
            onChange={handleChange}
            disabled={isProcessing}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={customer.email}
            onChange={handleChange}
            disabled={isProcessing}
          />

          <textarea
            rows="4"
            name="address"
            placeholder="Delivery Address"
            value={customer.address}
            onChange={handleChange}
            disabled={isProcessing}
          />

          <h2>
            Payment Method
          </h2>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              value="razorpay"
              checked={
                customer.payment ===
                "razorpay"
              }
              onChange={handleChange}
              disabled={isProcessing}
            />

            Razorpay
            {" "}
            (UPI / Card / Wallet / Net Banking)

          </label>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              value="cod"
              checked={
                customer.payment === "cod"
              }
              onChange={handleChange}
              disabled={isProcessing}
            />

            Cash on Delivery

          </label>

        </div>


        {/* =============================================
            ORDER SUMMARY
        ============================================== */}

        <div className="order-summary">

          <h2>
            Order Summary
          </h2>

          {cart.map((item) => (

            <div
              className="summary-item"
              key={item.id}
            >

              <span>
                {item.name}
                {" × "}
                {item.quantity}
              </span>

              <span>
                ₹
                {(
                  Number(item.price || 0) *
                  Number(item.quantity || 0)
                ).toFixed(2)}
              </span>

            </div>

          ))}


          <hr />


          <div className="summary-item">

            <span>
              Subtotal
            </span>

            <span>
              ₹{subtotal.toFixed(2)}
            </span>

          </div>


          <div className="summary-item">

            <span>
              GST (5%)
            </span>

            <span>
              ₹{gst.toFixed(2)}
            </span>

          </div>


          <div className="summary-item">

            <span>
              Delivery Charge
            </span>

            <span>
              ₹{delivery.toFixed(2)}
            </span>

          </div>


          <hr />


          <div className="summary-total">

            <h3>
              Total
            </h3>

            <h3>
              ₹{grandTotal.toFixed(2)}
            </h3>

          </div>


          <button
            className="pay-btn"
            onClick={handlePayment}
            disabled={isProcessing}
          >

            {isProcessing
              ? "Processing..."
              : customer.payment === "cod"
                ? "Place Order"
                : `Pay ₹${grandTotal.toFixed(2)}`}

          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;