// 📄 src/hooks/useDashboardStats.ts

import { useEffect, useState } from "react";
import api from "@/services/api";

interface DashboardStats {
  totalContracts: number;
  activeContracts: number;
  expiredContracts: number;
  assignedContracts: number;
}

export const useDashboardStats = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/dashboard/stats"); // Token otomatik eklenecek
        setStats(response.data);
      } catch (error) {
        console.error("📛 Dashboard verileri alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
};
