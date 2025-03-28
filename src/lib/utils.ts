// 📄 src/lib/utils.ts

/**
 * Class birleştirme (Bootstrap için sade bırakıldı)
 * @param classes - String veya boolean listesi
 * @returns - Birleştirilmiş string
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Tarihi Türkçe, okunabilir biçimde formatlar.
 * @param dateString - ISO veya uyumlu bir tarih string
 * @returns - "25 Mart 2025" gibi bir çıktı
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/**
 * Çoklu para birimi destekler
 * TRY, USD, EUR, GBP
 * @param amount - Para miktarı
 * @param currency - "TRY" | "USD" | "EUR" | "GBP"
 * @returns - Formatlanmış para string
 */
export function formatCurrency(amount: number, currency: "TRY" | "USD" | "EUR" | "GBP" = "TRY"): string {
  return amount.toLocaleString("tr-TR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Metin kısaltıcı
 * @param text - Orijinal metin
 * @param maxLength - Maksimum uzunluk
 * @returns - Kısaltılmış metin
 */
export function truncateText(text: string, maxLength: number = 30): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
