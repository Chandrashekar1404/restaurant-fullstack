import API from "../api/api";

// Menu Services
export const fetchMenu = () => API.get("/menu");
export const createMenu = (data) => API.post("/menu", data);

// Orders Services
export const fetchOrders = () => API.get("/orders");
export const createOrder = (data) => API.post("/orders", data);

// Customers Services
export const fetchCustomers = () => API.get("/customers");
export const createCustomer = (data) => API.post("/customers", data);

// Billing Services
export const fetchBills = () => API.get("/billing");

// Reports Services
export const fetchReports = () => API.get("/reports");