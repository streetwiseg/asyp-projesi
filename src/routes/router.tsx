// 📄 src/routes/router.tsx

import { createBrowserRouter } from "react-router-dom";

// 📦 Layouts
import DashboardLayout from "@/layouts/dashboardlayout";

// 🧭 Sayfalar
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Features from "@/pages/features";
import Packages from "@/pages/packages";
import Login from "@/pages/login";
import Register from "@/pages/register";
import ForgotPassword from "@/pages/forgotpassword";
import NotFound from "@/pages/notfound";
import Dashboard from "@/pages/dashboard";

// 📄 Dashboard Alt Sayfalar
import AssignContract from "@/pages/contracts/assigncontract";
import SummaryReports from "@/pages/dashboard/reports/summary";
import DetailedReports from "@/pages/dashboard/reports/detail";

// 🧠 Yapay Zeka Sayfaları
import AiAnalysisIndex from "@/pages/dashboard/ai-analysis/index";
import UploadContract from "@/pages/dashboard/ai-analysis/upload";
import LoadingPage from "@/pages/dashboard/ai-analysis/loading";
import ResultPage from "@/pages/dashboard/ai-analysis/result";
import AnalysisHistory from "@/pages/dashboard/ai-analysis/analysis-history";

// 🛡️ Korumalı Erişim
import ProtectedRoute from "@/components/ProtectedRoute";

const router = createBrowserRouter([
  // ...
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "contracts/assign", element: <AssignContract /> },
      { path: "reports/summary", element: <SummaryReports /> },
      { path: "reports/detail", element: <DetailedReports /> },

      // ✅ Yapay Zeka Analiz Sayfaları
      { path: "ai-analysis", element: <AiAnalysisIndex /> },
      { path: "ai-analysis/upload", element: <UploadContract /> },
      { path: "ai-analysis/loading", element: <LoadingPage /> },
      { path: "ai-analysis/result", element: <ResultPage /> },
      { path: "ai-analysis/history", element: <AnalysisHistory /> }, // ⭐ YENİ

    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
