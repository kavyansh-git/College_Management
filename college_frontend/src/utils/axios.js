import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // or your production API
  timeout: 10000,
  headers: {
    
  },
});

export default axiosInstance;
