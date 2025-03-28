// 📄 src/ai/model/contract-analyzer.ts
// 🧠 Sözleşme Analiz Motoru (OpenAI GPT-4 Turbo)

import { AnalysisResult } from "@/ai/interface/analysis-result";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("OpenAI API key tanımlı değil. Lütfen .env dosyasını kontrol et.");
}

const SYSTEM_PROMPT = `
Sen deneyimli bir sözleşme analisti gibi davranan gelişmiş bir yapay zekasın.
Sana verilen sözleşme metinlerini analiz edecek ve aşağıdaki formatta özetleyeceksin:
1. Taraflar
2. Başlangıç ve Bitiş Tarihleri
3. Süre
4. Yükümlülükler
5. Cezai Şartlar
6. Yenileme Koşulları
7. Ödeme Şartları
8. Riskli Maddeler
9. Eksik Görülen Maddeler
10. Sözleşme Özeti

Yanıtını JSON formatında ve yalnızca veri içeriği olacak şekilde oluştur. Gereksiz açıklamalar verme.
`;

export const analyzeContractWithGPT = async (
  contractText: string
): Promise<AnalysisResult> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4-1106-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: contractText },
        ],
        temperature: 0.3,
        max_tokens: 1500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI API Hatası:", data);
      throw new Error(data.error?.message || "Bilinmeyen OpenAI hatası.");
    }

    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("Yanıt alınamadı. Lütfen tekrar deneyin.");
    }

    const parsed = JSON.parse(content);
    const result: AnalysisResult = {
      ...parsed,
      analyzedAt: new Date().toISOString(),
      fullText: contractText,
    };

    return result;
  } catch (error: any) {
    console.error("Sözleşme analizi başarısız:", error.message);
    throw error;
  }
};
