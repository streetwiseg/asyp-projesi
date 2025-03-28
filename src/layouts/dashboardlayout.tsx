// 📄 src/layouts/dashboardlayout.tsx
// 🧱 Dashboard Layout – Sidebar + İçerik

import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";

const DashboardLayout = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* 🧭 Sol Sidebar */}
      <Sidebar />

      {/* 📄 İçerik Alanı */}
      <div className="flex-grow-1 px-4 py-4 bg-light overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
