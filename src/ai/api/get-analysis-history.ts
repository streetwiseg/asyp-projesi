// 📄 src/ai/api/get-analysis-history.ts

import axios from "axios";
import { AnalysisResult } from "@/ai/interface/analysis-result";

// ✅ Kullanıcının analiz geçmişini çeken fonksiyon
export const getAnalysisHistory = async (): Promise<AnalysisResult[]> => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/contract/analysis`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Analiz geçmişi alınamadı:", error);
    throw error;
  }
};
