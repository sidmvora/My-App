import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'auth-token': localStorage.getItem('authtoken')
    }
  });
  export default axiosInstance