// 📄 src/data/dashboardStats.ts

import { FileText, UsersRound, TimerReset, FileWarning } from "lucide-react";

// Bu dosya artık sadece tip taşıyacak, veriyi API getirecek!

export interface DashboardStat {
  title: string;
  key: string; // api datası ile eşleştirme için
  icon: React.ElementType;
}

// Kartların tipi ve ikonu sabit, değerleri API'den gelecek
export const dashboardStats: DashboardStat[] = [
  { title: "Toplam Sözleşme", key: "totalContracts", icon: FileText },
  { title: "Aktif Kullanıcı", key: "activeUsers", icon: UsersRound },
  { title: "Takip Gereken", key: "followUpContracts", icon: TimerReset },
  { title: "Süresi Dolan", key: "expiredContracts", icon: FileWarning },
];
