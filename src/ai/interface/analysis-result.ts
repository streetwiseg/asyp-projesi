// 📄 src/ai/interface/analysis-result.ts
// 🧠 Yapay Zeka Analiz Sonuç Tipi

export interface AnalysisResult {
    /** Sözleşmedeki taraflar (örnek: Firma A, Firma B) */
    parties: string[];
  
    /** Başlangıç tarihi (ISO formatı veya doğal dil) */
    startDate: string;
  
    /** Bitiş tarihi */
    endDate: string;
  
    /** Süre bilgisi (örnek: 1 yıl, 6 ay) */
    duration: string;
  
    /** Sözleşmede belirtilen yükümlülükler */
    obligations: string[];
  
    /** Cezai şartlar (örnek: gecikme cezası, iptal tazminatı) */
    penalties: string[];
  
    /** Yenileme maddeleri (opsiyonel olabilir) */
    renewalTerms?: string;
  
    /** Riskli alanlar (eksik, belirsiz, çelişkili maddeler) */
    risks: string[];
  
    /** Eksik görülen kritik maddeler (örnek: cezai şart yok, süre tanımsız) */
    missingClauses: string[];
  
    /** Ödeme bilgisi (miktar, tarih, vade) */
    paymentTerms?: string;
  
    /** Sözleşmenin yapay zeka tarafından oluşturulan özeti */
    summary: string;
  
    /** Orijinal sözleşme metni (isteğe bağlı UI'da gösterilir) */
    fullText?: string;
  
    /** Modelin oluşturduğu analiz zamanı (opsiyonel loglama için) */
    analyzedAt?: string;
  }
  