// 📄 src/pages/dashboard/ai-analysis/result.tsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnalysisResult } from "@/ai/interface/analysis-result";
import { saveAnalysis } from "@/ai/api/save-analysis"; // ✅ Yeni eklenen kayıt fonksiyonu
import { toast } from "react-toastify";

const ResultPage = () => {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("ai_analysis_result");
    if (!stored) {
      alert("Analiz sonucu bulunamadı.");
      navigate("/dashboard/ai-analysis");
      return;
    }

    const parsedResult = JSON.parse(stored);
    setResult(parsedResult);

    // ✅ Analiz sonucunu backend'e gönder
    saveAnalysis(parsedResult)
      .then(() => toast.success("✔️ Analiz başarıyla kaydedildi."))
      .catch(() => toast.warning("⚠️ Analiz kaydedilemedi, internet bağlantınızı kontrol edin."));
  }, [navigate]);

  if (!result) return null;

  return (
    <div className="container py-4">
      <h2>📊 Sözleşme Analiz Sonuçları</h2>

      <div className="alert alert-secondary mt-3">
        <strong>📅 Analiz Tarihi:</strong>{" "}
        {new Date(result.analyzedAt || "").toLocaleString()}
      </div>

      <div className="mb-4">
        <h5>📝 Özet</h5>
        <p>{result.summary}</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h6>📍 Taraflar</h6>
          <ul>{result.parties.map((p, i) => <li key={i}>{p}</li>)}</ul>

          <h6>📅 Başlangıç / Bitiş</h6>
          <p>{result.startDate} - {result.endDate}</p>

          <h6>⏳ Süre</h6>
          <p>{result.duration}</p>

          {result.renewalTerms && (
            <>
              <h6>🔁 Yenileme</h6>
              <p>{result.renewalTerms}</p>
            </>
          )}

          {result.paymentTerms && (
            <>
              <h6>💵 Ödeme</h6>
              <p>{result.paymentTerms}</p>
            </>
          )}
        </div>

        <div className="col-md-6">
          <h6>✅ Yükümlülükler</h6>
          <ul>{result.obligations.map((o, i) => <li key={i}>{o}</li>)}</ul>

          <h6>⚠️ Cezai Şartlar</h6>
          <ul>{result.penalties.map((p, i) => <li key={i}>{p}</li>)}</ul>

          <h6>🚨 Riskli Maddeler</h6>
          <ul>{result.risks.map((r, i) => <li key={i}>{r}</li>)}</ul>

          <h6>🔴 Eksik Maddeler</h6>
          <ul>{result.missingClauses.map((m, i) => <li key={i}>{m}</li>)}</ul>
        </div>
      </div>

      {result.fullText && (
        <div className="mt-4">
          <h5>📄 Tam Metin</h5>
          <pre className="bg-light p-3 border rounded" style={{ maxHeight: 300, overflowY: "auto" }}>
            {result.fullText}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
