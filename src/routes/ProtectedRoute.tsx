// src/routes/ProtectedRoute.tsx

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

/**
 * ProtectedRoute, sadece giriş yapmış ve aktif paketi olan kullanıcıların
 * belirli sayfalara erişebilmesini sağlar. Aksi halde yönlendirir.
 */
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  // 1. Giriş yapılmamışsa login sayfasına yönlendir
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // 2. Paket satın alınmamışsa paket satın alma sayfasına yönlendir
  if (!user?.hasActivePackage) {
    return <Navigate to="/packages" replace state={{ from: location }} />;
  }

  // 3. Her şey tamamsa erişime izin ver
  return children;
};

export default ProtectedRoute;
