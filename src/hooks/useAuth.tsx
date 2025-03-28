// 📄 src/hooks/useAuth.tsx

import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

// 🌟 Güvenli useAuth hook'u
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    console.warn("⚠️ useAuth hook'u AuthProvider dışında çağrıldı!");
    return {
      user: null,
      isAuthenticated: false,
      login: () => {},
      logout: () => {},
    };
  }

  return context;
};
