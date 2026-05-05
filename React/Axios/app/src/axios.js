import axios from "axios";

const axiosInstance = axios.create({
   baseURL: 'https://69f20cb7b15130b973526fef.mockapi.io',
   responseType: 'json',
   timeout: 1000
})

export default axiosInstance