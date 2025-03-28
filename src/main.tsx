// 📄 src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "@/contexts/AuthContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

// 🎯 Uygulama root yapısı
const Root = () => (
  <BrowserRouter>
    <AuthProvider>
      <NotificationProvider>
        <App />
        <ToastContainer position="top-right" autoClose={3000} />
      </NotificationProvider>
    </AuthProvider>
  </BrowserRouter>
);

// 🚀 Render işlemi
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
