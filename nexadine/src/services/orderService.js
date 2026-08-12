import API from "../api/axiosConfig";

// =====================================================
// SAVE ORDER
// =====================================================

export const saveOrder = async (orderData) => {

  const token = localStorage.getItem("token");

  console.log("========== SAVE ORDER ==========");
  console.log("Token exists:", !!token);
  console.log("Order data:", orderData);

  const response = await API.post(
    "/orders",
    orderData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  console.log("ORDER RESPONSE:", response.data);

  return response.data;
};


// =====================================================
// GET ALL ORDERS
// =====================================================

export const getAllOrders = async () => {

  const token = localStorage.getItem("token");

  const response = await API.get(
    "/orders",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// =====================================================
// GET ORDER BY ID
// =====================================================

export const getOrderById = async (id) => {

  const token = localStorage.getItem("token");

  const response = await API.get(
    `/orders/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// =====================================================
// UPDATE ORDER STATUS
// =====================================================

export const updateOrderStatus = async (id, status) => {

  const token = localStorage.getItem("token");

  const response = await API.put(
    `/orders/${id}/status?status=${status}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// =====================================================
// DELETE ORDER
// =====================================================

export const deleteOrder = async (id) => {

  const token = localStorage.getItem("token");

  const response = await API.delete(
    `/orders/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};