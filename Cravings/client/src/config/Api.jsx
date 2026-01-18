import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.216.69.92:4500"
});

export default axiosInstance;
