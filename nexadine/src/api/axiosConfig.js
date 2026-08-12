import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081/api",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    console.log("========== AXIOS REQUEST ==========");
    console.log("URL:", config.url);
    console.log("TOKEN EXISTS:", !!token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;