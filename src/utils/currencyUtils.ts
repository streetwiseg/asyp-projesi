// 📄 src/utils/currencyUtils.ts

/**
 * Desteklenen para birimleri
 */
export type Currency = "TRY" | "USD" | "EUR" | "GBP";

/**
 * Para birimi sembolleri
 */
export const currencySymbols: Record<Currency, string> = {
  TRY: "₺",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

/**
 * Para formatlayıcı
 */
export function formatCurrency(amount: number, currency: Currency): string {
  return amount.toLocaleString("tr-TR", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Döviz kuru ile dönüştürme
 * @param amount Miktar
 * @param rate Kur (1 USD = 32.5 gibi)
 * @returns Dönüştürülmüş değer
 */
export function convertCurrency(amount: number, rate: number): number {
  return parseFloat((amount * rate).toFixed(2));
}
