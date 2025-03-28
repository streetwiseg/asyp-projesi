// C:\Users\soner\ASYP\asyp-vite\src\pages\dashboard\ai-analysis.tsx

import { useState } from "react";
import { Brain, UploadCloud, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// ✅ Mock sözleşme verisi
const mockContracts = [
  {
    id: 1,
    title: "Hizmet Sözleşmesi",
    content: "Taraflar aşağıdaki koşullarda hizmet vermeyi ve almayı kabul eder...",
  },
  {
    id: 2,
    title: "Gizlilik Sözleşmesi",
    content: "Taraflar tüm ticari sırları gizli tutmayı taahhüt eder...",
  },
];

const AIAnalysis = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedContractId, setSelectedContractId] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleAnalyze = async () => {
    if (!text) {
      setError("⚠️ Analiz için geçerli bir sözleşme metni bulunamadı.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    // 🔮 AI ile analiz yerine simülasyon
    setTimeout(() => {
      setResult(`📊 Analiz Sonuçları:

• Risk Seviyesi: Orta
• Ödeme Süresi: 30 gün
• Uyuşmazlık Riski: Düşük
• Yenileme Önerisi: 1 yıl sonra
• Önemli Maddeler: Madde 4.2, Madde 6.1
• Tavsiye: Madde 8.3'e dikkat edilmelidir.`);
      setLoading(false);
    }, 1200);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setText(content);
      setSelectedContractId(""); // başka seçim varsa temizle
    };
    reader.readAsText(file);
  };

  const handleContractSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedContractId(id);
    setUploadedFileName("");
    const selected = mockContracts.find((c) => String(c.id) === id);
    if (selected) setText(selected.content);
  };

  return (
    <div className="container py-5">
      {/* Başlık */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <Brain size={28} />
        <h2 className="fs-3 fw-bold mb-0 text-dark">Yapay Zeka Destekli Sözleşme Analizi</h2>
      </div>

      <Card className="p-4 mb-4">
        {/* Sözleşme Seçimi */}
        <div className="mb-3">
          <Label className="fw-semibold">📄 Kayıtlı Sözleşme Seç</Label>
          <select
            className="form-select"
            value={selectedContractId}
            onChange={handleContractSelect}
          >
            <option value="">-- Sözleşme Seçin --</option>
            {mockContracts.map((contract) => (
              <option key={contract.id} value={contract.id}>
                {contract.title}
              </option>
            ))}
          </select>
        </div>

        {/* Dosya Yükleme */}
        <div className="mb-3">
          <Label htmlFor="upload" className="fw-semibold">
            <UploadCloud size={16} className="me-1" />
            .txt Dosyası Yükle
          </Label>
          <Input
            id="upload"
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
          />
          {uploadedFileName && (
            <div className="text-muted small mt-1">📁 {uploadedFileName} yüklendi.</div>
          )}
        </div>

        {/* Metin Alanı */}
        <div className="mb-4">
          <Label className="fw-semibold">📝 Sözleşme İçeriği</Label>
          <Textarea
            rows={10}
            placeholder="Sözleşme metni burada gösterilecek..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Analiz Butonu */}
        <div className="text-end">
          <Button onClick={handleAnalyze} disabled={loading || !text}>
            {loading ? "Analiz Ediliyor..." : "Analizi Başlat"}
          </Button>
        </div>
      </Card>

      {/* Hata */}
      {error && (
        <div className="alert alert-danger mt-3 d-flex align-items-center gap-2">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      {/* Analiz Sonucu */}
      {result && (
        <Card className="p-4 mt-4 border border-primary bg-light">
          <h5 className="fw-bold text-primary mb-3">📋 Analiz Raporu</h5>
          <pre className="text-dark m-0" style={{ whiteSpace: "pre-wrap" }}>
            {result}
          </pre>
        </Card>
      )}
    </div>
  );
};

export default AIAnalysis;
