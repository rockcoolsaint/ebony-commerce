import axios from "axios"
import { create } from "apisauce";

// const customAxiosInstance = axios.create({baseURL: 'http://192.168.8.159:9000/api'})
// const apiClient = axios.create({baseURL: 'http://192.168.8.159:9000/api'})

// const apiClient = create({
//   axiosInstance: customAxiosInstance
// });

const apiClient = create({
  baseURL: 'http://192.168.8.159:9000/api',
});

export default apiClient;