// 📄 src/components/panels/aiAnalysisPanel.tsx

import React from "react";
import { Card } from "react-bootstrap";

interface AIAnalysisPanelProps {
  data?: {
    summary: string;
    risks: string[];
    missingClauses: string[];
    recommendations: string[];
  };
}

const AIAnalysisPanel: React.FC<AIAnalysisPanelProps> = ({ data }) => {
  if (!data) {
    return <p>Analiz edilecek bir sözleşme seçin.</p>;
  }

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="fw-bold mb-3">Yapay Zeka Sözleşme Analizi</h5>

        <div className="mb-3">
          <h6>📋 Özet</h6>
          <p>{data.summary || "Veri yok"}</p>
        </div>

        <div className="mb-3">
          <h6>⚠️ Riskler</h6>
          <ul>
            {data.risks.length > 0 ? data.risks.map((r, i) => <li key={i}>{r}</li>) : <li>Risk bulunamadı.</li>}
          </ul>
        </div>

        <div className="mb-3">
          <h6>❌ Eksik Maddeler</h6>
          <ul>
            {data.missingClauses.length > 0 ? data.missingClauses.map((m, i) => <li key={i}>{m}</li>) : <li>Eksik madde bulunamadı.</li>}
          </ul>
        </div>

        <div>
          <h6>💡 Öneriler</h6>
          <ul>
            {data.recommendations.length > 0 ? data.recommendations.map((r, i) => <li key={i}>{r}</li>) : <li>Öneri bulunamadı.</li>}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AIAnalysisPanel;
