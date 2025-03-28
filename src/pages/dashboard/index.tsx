// src/pages/dashboard/index.tsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  AlertCircle,
  Timer,
  BarChart2,
  FileSignature,
  ClipboardCheck,
} from "lucide-react";
import { dashboardStats } from "@/data/dashboardstats";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const DashboardHome = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(dashboardStats);

  useEffect(() => {
    // Gelecekte API ile dinamik veri çekimi yapılacak
    setStats(dashboardStats);
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold fs-3 text-dark">📊 Genel Sözleşme Paneli</h2>
      </div>

      {/* İstatistik Kartları */}
      <div className="row g-4 mb-5">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            className="col-12 col-sm-6 col-lg-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-3 shadow-sm h-100 border-0 bg-light rounded-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small">{item.title}</span>
                <item.icon className="text-primary" size={20} />
              </div>
              <div className="fs-4 fw-bold text-dark">{item.value}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Hızlı Erişim */}
      <h4 className="mb-3 fw-semibold">⚡ Hızlı İşlemler</h4>
      <div className="row g-4 mb-5">
        <div className="col-12 col-md-6 col-xl-4">
          <Card className="p-4 h-100 border-0 bg-white shadow-sm rounded-4">
            <div className="d-flex flex-column h-100 justify-content-between">
              <div>
                <h5 className="fw-bold mb-2">
                  <FileSignature size={18} className="me-2 text-primary" />
                  Sözleşme Ekle
                </h5>
                <p className="text-muted mb-0">
                  Yeni bir sözleşme oluşturmak için tıklayın.
                </p>
              </div>
              <Button className="mt-4 w-100" onClick={() => navigate("/dashboard/contracts/add-signed")}>
                Yeni Sözleşme Ekle
              </Button>
            </div>
          </Card>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <Card className="p-4 h-100 border-0 bg-white shadow-sm rounded-4">
            <div className="d-flex flex-column h-100 justify-content-between">
              <div>
                <h5 className="fw-bold mb-2">
                  <ClipboardCheck size={18} className="me-2 text-primary" />
                  Yükümlülükler
                </h5>
                <p className="text-muted mb-0">
                  Aktif yükümlülükleri detaylı görüntüleyin.
                </p>
              </div>
              <Button variant="outline" className="mt-4 w-100" onClick={() => navigate("/dashboard/contracts/obligations")}>
                Yükümlülükleri Aç
              </Button>
            </div>
          </Card>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <Card className="p-4 h-100 border-0 bg-white shadow-sm rounded-4">
            <div className="d-flex flex-column h-100 justify-content-between">
              <div>
                <h5 className="fw-bold mb-2">
                  <AlertCircle size={18} className="me-2 text-danger" />
                  Süresi Dolanlar
                </h5>
                <p className="text-muted mb-0">
                  Yenilenmesi gereken sözleşmeleri kaçırmayın.
                </p>
              </div>
              <Button variant="danger" className="mt-4 w-100" onClick={() => navigate("/dashboard/contracts/expired")}>
                İncele
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Raporlar */}
      <h4 className="mb-3 fw-semibold">📈 Raporlar</h4>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <Card className="p-4 d-flex justify-content-between align-items-center border-0 bg-white shadow-sm rounded-4">
            <div>
              <h6 className="fw-bold mb-1">Özet Raporlar</h6>
              <p className="text-muted mb-0">Genel sözleşme istatistikleri.</p>
            </div>
            <Button size="sm" onClick={() => navigate("/dashboard/reports/summary")}>
              Görüntüle
            </Button>
          </Card>
        </div>
        <div className="col-12 col-md-6">
          <Card className="p-4 d-flex justify-content-between align-items-center border-0 bg-white shadow-sm rounded-4">
            <div>
              <h6 className="fw-bold mb-1">Ayrıntılı Raporlar</h6>
              <p className="text-muted mb-0">Derinlemesine veri analizi ve detaylar.</p>
            </div>
            <Button size="sm" variant="secondary" onClick={() => navigate("/dashboard/reports/detail")}>
              İncele
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
