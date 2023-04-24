import axios from "axios";
import { BASE_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    Accept: "application/x-www-form-urlencoded, text/plain",
    ...(localStorage.getItem("accessToken") && {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}),
  },
});

axiosInstance.interceptors.response.use(res => res, error => { 
  if (error.response.status == 403) {
    localStorage.removeItem("accessToken");
    window.location.href = '/login'
  }
}) 

export default axiosInstance;
