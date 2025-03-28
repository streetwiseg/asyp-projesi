// 📄 src/pages/dashboard/ai-analysis/upload.tsx

import { useState } from "react";
import { analyzeContract } from "@/ai/analyzer";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import mammoth from "mammoth";

// PDF için (pdf-parse node ortamında çalışır, web'de farklı çözüm gerekir)
// Bu örnekte PDF desteklenmiyor, ileride eklenebilir

const UploadContract = () => {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const fileType = file.name.split(".").pop()?.toLowerCase();

    try {
      if (fileType === "txt") {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          setText(result);
        };
        reader.readAsText(file);
      } else if (fileType === "docx") {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        setText(result.value);
      } else if (fileType === "xlsx") {
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const raw = XLSX.utils.sheet_to_csv(sheet);
        setText(raw);
      } else {
        alert("Desteklenmeyen dosya türü. Lütfen .txt, .docx veya .xlsx yükleyin.");
      }
    } catch (error) {
      alert("Dosya okunurken hata oluştu.");
      console.error(error);
    }
  };

  const handleAnalyze = async () => {
    if (!text.trim()) return alert("Lütfen geçerli bir içerik girin.");

    setLoading(true);
    try {
      const result = await analyzeContract(text);
      localStorage.setItem("ai_analysis_result", JSON.stringify(result));
      navigate("/dashboard/ai-analysis/result");
    } catch (error) {
      alert("Analiz başarısız oldu.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2>📄 Sözleşme Yükle ve Analiz Et</h2>

      <div className="mb-3">
        <label className="form-label">Sözleşme Dosyası (.docx, .xlsx, .txt)</label>
        <input type="file" className="form-control" onChange={handleFile} />
        {fileName && <div className="text-muted mt-1">Yüklenen: {fileName}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Alternatif olarak sözleşme metnini yapıştır:</label>
        <textarea
          className="form-control"
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Sözleşme metnini buraya yapıştırın..."
        />
      </div>

      <button className="btn btn-primary" disabled={loading} onClick={handleAnalyze}>
        {loading ? "Analiz Ediliyor..." : "Analiz Et"}
      </button>
    </div>
  );
};

export default UploadContract;
