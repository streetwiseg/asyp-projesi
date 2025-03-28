// 📄 src/pages/dashboard/ai-analysis/loading.tsx

import { useEffect, useState } from "react";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const messages = [
    "Sözleşme metni işleniyor...",
    "Yükümlülükler analiz ediliyor...",
    "Riskler tespit ediliyor...",
    "Eksik maddeler çıkarılıyor...",
    "Özet hazırlanıyor...",
    "Neredeyse bitti..."
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 10 + 5), 100);
        return next;
      });

      setMessageIndex((prev) => Math.min(prev + 1, messages.length - 1));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light px-3">
      <div className="spinner-border text-primary mb-4" role="status" style={{ width: "4rem", height: "4rem" }}>
        <span className="visually-hidden">Yükleniyor...</span>
      </div>

      <h4 className="mb-3">{messages[messageIndex]}</h4>

      <div className="progress w-75" style={{ height: "20px" }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress}%
        </div>
      </div>

      <p className="mt-3 text-muted">Yapay zeka sözleşmenizi inceliyor. Lütfen bekleyin...</p>
    </div>
  );
};

export default LoadingPage;
