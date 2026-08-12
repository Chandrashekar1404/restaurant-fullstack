import axios from "axios";

const API_URL = "http://localhost:8081/api/tables";

// Get all tables
export const getTables = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Get Tables Error:", error);
    throw error;
  }
};

// Get table by ID
export const getTableById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Get Table Error:", error);
    throw error;
  }
};

// Update table status
export const updateTableStatus = async (id, status) => {
  try {
    const response = await axios.put(
      `${API_URL}/${id}/status`,
      null,
      {
        params: {
          status: status,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Update Table Status Error:", error);
    throw error;
  }
};