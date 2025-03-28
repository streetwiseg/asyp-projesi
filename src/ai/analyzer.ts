// 📄 src/ai/analyzer.ts
// 🧠 AI Motor Yöneticisi (şimdilik sadece OpenAI GPT-4 kullanıyor)

import { analyzeContractWithGPT } from "@/ai/model/contract-analyzer";
import { AnalysisResult } from "@/ai/interface/analysis-result";

/**
 * Sözleşme metnini analiz eden AI yöneticisi
 * Gelecekte farklı modelleri buradan yöneteceğiz
 */
export const analyzeContract = async (
  contractText: string
): Promise<AnalysisResult> => {
  // Şimdilik sadece GPT ile analiz
  return await analyzeContractWithGPT(contractText);
};
