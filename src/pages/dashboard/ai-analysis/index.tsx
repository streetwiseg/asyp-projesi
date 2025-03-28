// 📄 src/pages/dashboard/ai-analysis/index.tsx
// Yapay Zeka Analiz Sayfası – Giriş Noktası

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AiAnalysisIndex = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa yüklendiğinde otomatik olarak upload sayfasına yönlendir
    navigate("/dashboard/ai-analysis/upload");
  }, [navigate]);

  return null;
};

export default AiAnalysisIndex;
