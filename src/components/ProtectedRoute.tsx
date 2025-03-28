// src/components/ProtectedRoute.tsx

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "admin" | "user" | "viewer"; // İstersen role bazlı kontrol de koyabilirsin
  packageRequired?: boolean; // Paket satın alınmış mı kontrolü
}

// Canlıya Hazır ProtectedRoute
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole, packageRequired = false }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Giriş yapmamışsa login'e yolla
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Role kontrolü
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Paket zorunluluğu kontrolü
  if (packageRequired && !user?.has_active_package) {
    return <Navigate to="/packages" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
