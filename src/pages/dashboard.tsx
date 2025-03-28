// 📄 src/pages/dashboard.tsx

// Dashboard sayfası (Sözleşme İstatistikleri)
// Gerçek API bağlantısı ile canlıya hazır versiyon
import { useEffect, useState } from "react";
import api from "@/lib/axios"; // axios ayarlarını buradan çekiyoruz
import { toast } from "@/components/ui/toaster";

type DashboardStats = {
  totalContracts: number;
  activeContracts: number;
  expiredContracts: number;
  assignedContracts: number;
};

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/dashboard/summary");
        setStats(response.data);
      } catch (error) {
        toast.error("Dashboard verileri alınamadı.");
        console.error("Dashboard API Hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (!stats) {
    return <p>Veriler alınamadı!</p>;
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">Sözleşme Yönetimi</h2>

      <div className="row g-3">
        <div className="col-md-6 col-lg-3">
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="fw-bold">{stats.totalContracts}</h3>
            <p className="text-muted mb-0">Toplam Sözleşme</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="fw-bold">{stats.activeContracts}</h3>
            <p className="text-muted mb-0">Aktif Sözleşme</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="fw-bold">{stats.expiredContracts}</h3>
            <p className="text-muted mb-0">Süresi Dolan</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="fw-bold">{stats.assignedContracts}</h3>
            <p className="text-muted mb-0">Atanmış Sözleşme</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
