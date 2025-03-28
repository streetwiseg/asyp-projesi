// 📄 src/layouts/publicLayout.tsx
// 🌐 Giriş / Kayıt / Genel Sayfalar için Layout

import { Outlet, Navigate } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useAuth } from "@/hooks/useAuth";

const PublicLayout = () => {
  const { isAuthenticated } = useAuth();

  // Giriş yapmışsa doğrudan dashboard'a yönlendir
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="min-vh-100 px-3 py-5 bg-light">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
