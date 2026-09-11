import axios from "axios";

const API_URL = "http://localhost:8080/api/payment";

// Create Razorpay Order
export const createOrder = async (amount) => {
  try {
    const response = await axios.post(
      `${API_URL}/create-order`,
      {
        amount,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Create Order Error:", error);
    throw error;
  }
};

// Verify Razorpay Payment
export const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.post(
      `${API_URL}/verify`,
      paymentData
    );

    return response.data;
  } catch (error) {
    console.error("Verify Payment Error:", error);
    throw error;
  }
};