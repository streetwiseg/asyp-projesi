// 📄 src/pages/dashboard/settings/settings.tsx

import SettingsLayout from "@/modules/settings/index";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const SettingsPage = () => {
  const { isAuthenticated, user } = useAuth();

  // Eğer kullanıcı giriş yapmamışsa → login'e yönlendir
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Eğer kullanıcı admin değilse → dashboard ana sayfaya yönlendir
  if (user?.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  // Her şey yolundaysa, ayarlar sekmesini göster
  return <SettingsLayout />;
};

export default SettingsPage;
