// 📄 src/types/package.ts

// Paket İsimleri
export type PackageName = "Free" | "Standard" | "Pro" | "Enterprise";

// Paket Özelliği
export interface PackageFeature {
  id: string;                 // sistemde kullanılacak id
  label: string;              // kullanıcıya gösterilecek isim
  route: string;              // modülün yönlendirme linki
  is_locked: boolean;         // erişim açık mı kapalı mı
}

// Kullanıcının Abone Olduğu Paket
export interface UserPackage {
  name: PackageName;          // Paket adı
  features: PackageFeature[]; // Paket içeriği (aktif modüller)
  max_contracts?: number;     // Maksimum sözleşme sayısı
  max_users?: number;         // Maksimum kullanıcı sayısı
  support_level: "basic" | "priority" | "enterprise"; // Destek tipi
  has_ai_analysis: boolean;   // Yapay Zeka Analizi
  has_reporting: boolean;     // Raporlama Özelliği
}
