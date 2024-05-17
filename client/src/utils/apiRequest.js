import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "https://opco.onrender.com/api",
  baseURL: "http://localhost:8800/api/kyc",
  // withCredentials: true,
});

export default apiRequest;
