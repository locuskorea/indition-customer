import axios from "axios";
import Cookies from "js-cookie";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // baseURL: 'http://192.168.0.63:3065/store',
});
instance.interceptors.request.use(
  async (config) => {
    const token = await Cookies.get("wmsAccessToken");
    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
