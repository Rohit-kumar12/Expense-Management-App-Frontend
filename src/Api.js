import axios from "axios";

export const api = axios.create({
  baseURL: "https://expense-management-app-backend.onrender.com",
  headers: { "Content-Type": "application/json" },
});
