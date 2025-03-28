// 📄 src/contexts/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken, getUser, clearToken, clearUser } from "@/lib/auth";

interface AuthContextType {
  token: string | null;
  user: any;
  login: (token: string, user: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [user, setUserState] = useState<any>(null);

  useEffect(() => {
    const storedToken = getToken();
    const storedUser = getUser();

    if (storedToken) setTokenState(storedToken);
    if (storedUser) setUserState(storedUser);
  }, []);

  const login = (token: string, user: any) => {
    setTokenState(token);
    setUserState(user);
  };

  const logout = () => {
    clearToken();
    clearUser();
    setTokenState(null);
    setUserState(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
