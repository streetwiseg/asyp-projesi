// 📄 src/services/authService.ts

import axios from "axios";

// 📌 Giriş (Login)
export const loginUser = async (email: string, password: string) => {
    const response = await axios.post("/api/auth/login", { email, password });
    return response.data;
};

// 📌 Çıkış (Logout)
export const logoutUser = async () => {
    const response = await axios.post("/api/auth/logout");
    return response.data;
};

// 📌 Kayıt (Register)
export const registerUser = async (formData: any) => {
    const response = await axios.post("/api/auth/register", formData);
    return response.data;
};

// 📌 Kimlik Doğrulama Durumunu Kontrol Et (Token ile)
export const checkAuthStatus = async () => {
    const response = await axios.get("/api/auth/status");
    return response.data;
};

