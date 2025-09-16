// frontend/src/api.js
import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3000", // backend running port
  withCredentials: true,            // so cookies (token) are sent
});
