// 📄 src/ai/utils/export-pdf.ts

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // tablo için
import { AnalysisResult } from "@/ai/interface/analysis-result";

/**
 * Analiz Sonucunu PDF Olarak İndirir
 */
export const exportAnalysisToPDF = (analysis: AnalysisResult) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Sözleşme Analiz Raporu", 14, 20);

  doc.setFontSize(12);
  doc.text(`Tarih: ${new Date(analysis.analyzed_at).toLocaleDateString()}`, 14, 30);

  autoTable(doc, {
    startY: 40,
    head: [["Alan", "İçerik"]],
    body: [
      ["Özet", analysis.summary || "Yok"],
      ["Taraflar", analysis.parties.join(", ") || "Yok"],
      ["Yükümlülükler", analysis.obligations.join(", ") || "Yok"],
      ["Cezalar", analysis.penalties.join(", ") || "Yok"],
      ["Riskler", analysis.risks.join(", ") || "Yok"],
      ["Eksik Maddeler", analysis.missing_clauses.join(", ") || "Yok"],
      ["Başlangıç Tarihi", analysis.start_date ? new Date(analysis.start_date).toLocaleDateString() : "Belirtilmemiş"],
      ["Bitiş Tarihi", analysis.end_date ? new Date(analysis.end_date).toLocaleDateString() : "Belirtilmemiş"],
      ["Süre", analysis.duration || "Belirtilmemiş"],
      ["Yenileme Şartları", analysis.renewal_terms || "Yok"],
      ["Ödeme Şartları", analysis.payment_terms || "Yok"],
    ],
  });

  doc.save(`analysis-${analysis.id}.pdf`);
};
