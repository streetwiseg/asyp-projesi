// 📄 src/app.tsx

import { Routes, Route } from "react-router-dom";

// Layoutlar
import PublicLayout from "@/layouts/PublicLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

// Genel Sayfalar
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Features from "@/pages/Features";
import Packages from "@/pages/Packages";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ForgotPassword from "@/pages/ForgotPassword";

// Dashboard Anasayfa
import DashboardHome from "@/pages/dashboard";

// Ayarlar Modülü
import Settings from "@/pages/dashboard/settings";
import AddUserModal from "@/pages/dashboard/settings/addusermodal";
import UserList from "@/pages/dashboard/settings/userlist";
import RoleManager from "@/pages/dashboard/settings/rolemanager";
import ContractAssigner from "@/pages/dashboard/settings/contractassigner";
import NotificationSettings from "@/pages/dashboard/settings/notificationsettings";

// Sözleşme Modülü
import AddSigned from "@/pages/dashboard/contracts/addsignedcontract";
import AddUnsigned from "@/pages/dashboard/contracts/addunsignedcontract";
import ContractList from "@/pages/dashboard/contracts/contractlist";
import Obligations from "@/pages/dashboard/contracts/obligations";
import Payments from "@/pages/dashboard/contracts/payments";
import Collections from "@/pages/dashboard/contracts/collections";
import Expired from "@/pages/dashboard/contracts/expired";
import FollowUp from "@/pages/dashboard/contracts/follow-up";
import Renew from "@/pages/dashboard/contracts/renew";
import Assign from "@/pages/dashboard/contracts/assign";

// Raporlar
import Summary from "@/pages/dashboard/reports/summary";
import Detail from "@/pages/dashboard/reports/detail";

// Yapay Zeka
import AIAnalysis from "@/pages/dashboard/ai-analysis/ai-analysis";

// Destek ve Hatalar
import Support from "@/pages/dashboard/support";
import NotFound from "@/pages/notfound";

// Route Koruması
import ProtectedRoute from "@/components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* 🔓 Public Routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="features" element={<Features />} />
        <Route path="packages" element={<Packages />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* 🔐 Dashboard (Protected) */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />

        {/* Ayarlar */}
        <Route path="settings" element={<Settings />} />
        <Route path="settings/add-user" element={<AddUserModal />} />
        <Route path="settings/users" element={<UserList />} />
        <Route path="settings/roles" element={<RoleManager />} />
        <Route path="settings/assign" element={<ContractAssigner />} />
        <Route path="settings/notifications" element={<NotificationSettings />} />

        {/* Sözleşmeler */}
        <Route path="contracts/add-signed" element={<AddSigned />} />
        <Route path="contracts/add-unsigned" element={<AddUnsigned />} />
        <Route path="contracts/contract-list" element={<ContractList />} />
        <Route path="contracts/obligations" element={<Obligations />} />
        <Route path="contracts/payments" element={<Payments />} />
        <Route path="contracts/collections" element={<Collections />} />
        <Route path="contracts/expired" element={<Expired />} />
        <Route path="contracts/follow-up" element={<FollowUp />} />
        <Route path="contracts/renew" element={<Renew />} />
        <Route path="contracts/assign" element={<Assign />} />

        {/* Raporlar */}
        <Route path="reports/summary" element={<Summary />} />
        <Route path="reports/detail" element={<Detail />} />

        {/* Yapay Zeka */}
        <Route path="ai-analysis" element={<AIAnalysis />} />

        {/* Destek */}
        <Route path="support" element={<Support />} />
      </Route>

      {/* ❌ 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
