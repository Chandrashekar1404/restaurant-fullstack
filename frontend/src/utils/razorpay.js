import { createOrder, verifyPayment } from "../services/paymentService";

export const openRazorpay = async (amount, customer) => {
  // Check Razorpay SDK
  if (!window.Razorpay) {
    alert("Razorpay SDK is not loaded.");
    throw new Error("Razorpay SDK not loaded");
  }

  try {
    // Create Order from Backend
    const order = await createOrder(amount);

    return new Promise((resolve, reject) => {
      const options = {
        key: "rzp_test_TMWxFX30N07Bp4", // Your Razorpay Test Key ID

        amount: order.amount,
        currency: order.currency,
        order_id: order.id,

        name: "NexaDine",
        description: "Food Order Payment",

        prefill: {
          name: customer.fullName,
          email: customer.email,
          contact: customer.phone,
        },

        theme: {
          color: "#ff6600",
        },

      handler: async function (response) {

  console.log("Razorpay Response");

  console.log("FULL RESPONSE =", response);

  const paymentData = {

    razorpay_order_id: response.razorpay_order_id,

    razorpay_payment_id: response.razorpay_payment_id,

    razorpay_signature: response.razorpay_signature,

  };

  console.log("Sending Verify Payload");

  console.log(paymentData);

  try {

    const verifyResponse = await verifyPayment(paymentData);

    console.log("Verify Response");

    console.log(verifyResponse);

    if (verifyResponse.success) {

      resolve({

        success: true,

        paymentId: response.razorpay_payment_id,

        orderId: response.razorpay_order_id,

      });

    } else {

      reject(new Error("Payment Verification Failed"));

    }

  } catch (err) {

    console.error(err);

    reject(err);

  }

},

        modal: {
          ondismiss: function () {
            reject(new Error("Payment cancelled by user."));
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        reject(
          new Error(
            response.error.description || "Payment Failed"
          )
        );
      });

      razorpay.open();
    });
  } catch (error) {
    console.error("Razorpay Error:", error);
    throw error;
  }
};