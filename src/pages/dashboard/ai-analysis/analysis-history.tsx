// 📄 src/pages/dashboard/ai-analysis/analysis-history.tsx

import React, { useEffect, useState } from "react";
import { getAnalysisHistory } from "@/ai/api/get-analysis-history";
import { AnalysisResult } from "@/ai/interface/analysis-result";
import { Card, CardBody, Button } from "react-bootstrap";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@/contexts/NotificationContext"; // ✅ eklendi

const AnalysisHistory = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const [loading, setLoading] = useState(true);
  const { notifyRisk, notifyError } = useNotification(); // ✅ notification hazır

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const fetchHistory = async () => {
      try {
        const data = await getAnalysisHistory();
        setHistory(data);

        // ✅ İlk yüke özel risk kontrolü
        data.forEach((item) => {
          notifyRisk(item.risks);
        });

      } catch (error) {
        notifyError("Analiz geçmişi alınamadı.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [isAuthenticated, navigate, notifyRisk, notifyError]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">🧾 Analiz Geçmişi</h1>

      {history.length === 0 ? (
        <p>Hiç analiz kaydı bulunamadı.</p>
      ) : (
        <div className="row g-3">
          {history.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <Card>
                <CardBody>
                  <h5>{item.summary}</h5>
                  <p className="text-muted small">
                    Analiz Tarihi: {new Date(item.analyzed_at).toLocaleDateString()}
                  </p>
                  <p><strong>Taraflar:</strong> {item.parties.join(", ")}</p>
                  <p><strong>Riskler:</strong> {item.risks.length > 0 ? item.risks.join(", ") : "Risk Yok"}</p>

                  {/* İstersen PDF butonunu da bırakabiliriz */}
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnalysisHistory;
