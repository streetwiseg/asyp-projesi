// 📄 src/services/api.ts
import axios from "axios";
import { getToken } from "@/utils/storage";

const api = axios.create({
  baseURL: "http://localhost:8010",
  headers: {
      "Content-Type": "application/json",
  },
});

// 🔐 Token varsa otomatik olarak ekler (güvenli ve hatasız)
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

export default api;
