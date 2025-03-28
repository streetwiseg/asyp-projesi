// 📄 src/contexts/NotificationContext.tsx

import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";

// 🎯 Context tipi
interface NotificationContextType {
  notifyRisk: (risks: string[]) => void;
  notifyInfo: (message: string) => void;
  notifyError: (message: string) => void;
}

// ✅ Context Oluştur
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// ✅ Provider
export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {

  // 🟣 Riskli analiz bildirimi
  const notifyRisk = (risks: string[]) => {
    if (risks.length > 0) {
      toast.warn(`⚠️ Risk Tespit Edildi: ${risks.join(", ")}`, { autoClose: 5000 });
    }
  };

  // 🟣 Genel bilgi bildirimi
  const notifyInfo = (message: string) => {
    toast.info(message, { autoClose: 3000 });
  };

  // 🟣 Hata bildirimi
  const notifyError = (message: string) => {
    toast.error(message, { autoClose: 3000 });
  };

  return (
    <NotificationContext.Provider value={{ notifyRisk, notifyInfo, notifyError }}>
      {children}
    </NotificationContext.Provider>
  );
};

// ✅ Hook
export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification yalnızca NotificationProvider içinde kullanılabilir.");
  }
  return context;
};
