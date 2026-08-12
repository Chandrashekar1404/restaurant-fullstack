import axios from "axios";

const API_URL = "http://localhost:8081/api/waiter";

// =========================
// WAITER LOGIN
// =========================

export const waiterLogin = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      {
        email,
        password,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data || "Invalid email or password"
    );
  }
};


// =========================
// WAITER REGISTER
// =========================

export const waiterRegister = async (waiterData) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/register`,
      waiterData
    );

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data || "Registration failed"
    );
  }
};


// =========================
// GET WAITER ORDERS
// =========================

export const getWaiterOrders = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/orders`
    );

    return response.data;
  } catch (error) {
    console.error(
      "Get Waiter Orders Error:",
      error
    );

    throw error;
  }
};


// =========================
// GET SINGLE ORDER
// =========================

export const getOrder = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/orders/${id}`
    );

    return response.data;
  } catch (error) {
    console.error(
      "Get Order Error:",
      error
    );

    throw error;
  }
};


// =========================
// UPDATE ORDER STATUS
// =========================

export const updateOrderStatus = async (
  id,
  status
) => {
  try {
    const response = await axios.put(
      `${API_URL}/orders/${id}/status`,
      null,
      {
        params: {
          status: status,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Update Order Status Error:",
      error
    );

    throw error;
  }
};


// =========================
// UPDATE WAITER ORDER STATUS
// =========================
// This name is required by Orders.jsx

export const updateWaiterOrderStatus = async (
  id,
  status
) => {
  return updateOrderStatus(id, status);
};