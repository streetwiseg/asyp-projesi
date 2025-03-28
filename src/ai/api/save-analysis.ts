// 📄 src/ai/api/save-analysis.ts

import api from "@/services/api";
import { AnalysisResult } from "@/ai/interface/analysis-result";

/**
 * AI analiz sonucunu backend'e kaydeder.
 * @param result - AI tarafından oluşturulan analiz sonucu
 */
export const saveAnalysis = async (result: AnalysisResult) => {
  try {
    const response = await api.post("/contract/analysis", result);
    return response.data;
  } catch (error) {
    console.error("Analiz kaydı başarısız:", error);
    throw error;
  }
};
