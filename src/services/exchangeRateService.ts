// src/services/exchangeRateService.ts

/**
 * Döviz kurları için basit bir servis
 * İleride gerçek bir API (Fixer, CurrencyLayer, TCMB) entegre edilecek.
 */

export type Currency = "TRY" | "USD" | "EUR" | "GBP";

// ⚡ Geçici sabit kurlar (Canlıda bir API'den alınmalı)
const rates: Record<Currency, number> = {
  TRY: 1,       // Base Currency
  USD: 32.5,    // 1 USD = 32.5 TL
  EUR: 35.0,    // 1 EUR = 35.0 TL
  GBP: 40.0     // 1 GBP = 40.0 TL
};

/**
 * Kur değerini getirir.
 * @param currency - İstenen para birimi
 * @returns - Kur oranı
 */
export function getExchangeRate(currency: Currency): number {
  return rates[currency] || 1;
}

/**
 * Tüm kurları döndürür
 */
export function getAllExchangeRates(): Record<Currency, number> {
  return rates;
}

/**
 * Manuel olarak kur güncelleme (Sadece admin tarafından kullanılmalı)
 * @param currency - Güncellenecek para birimi
 * @param newRate - Yeni kur değeri
 */
export function updateExchangeRate(currency: Currency, newRate: number): void {
  if (newRate <= 0) throw new Error("Kur değeri 0 veya negatif olamaz.");
  rates[currency] = newRate;
}
