// src/lib/axios.ts

import axios from "axios";
import { toast } from "@/components/ui/toaster";

// .env'den veya doğrudan belirlenebilir
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8010/api";

// Axios örneği oluştur
const api = axios.create({
  baseURL: "http://localhost:8010",
  headers: {
      "Content-Type": "application/json",
  },
});

// Request interceptor – Authorization header ekle
api.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("asyp_user");
    if (storedUser) {
      const token = JSON.parse(storedUser)?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor – Global hata yakalama
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        toast("🚫 Oturum süresi doldu. Lütfen tekrar giriş yapın.");
        localStorage.removeItem("asyp_user");
        window.location.href = "/login";
      } else if (status === 403) {
        toast("⛔ Yetkisiz erişim.");
      } else if (status >= 500) {
        toast("💥 Sunucu hatası. Lütfen daha sonra tekrar deneyin.");
      }
    } else {
      toast("📡 Sunucuya erişilemedi.");
    }

    return Promise.reject(error);
  }
);

export default api;
