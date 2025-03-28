// 📄 src/types/sidebar.ts

// Sidebar Menü Elemanı
export interface SidebarItem {
  label: string;               // Görünecek isim
  route: string;               // Yönlendirme yolu
  icon: React.ElementType;     // Icon bileşeni (lucide-react)
  required_feature?: string;   // (Opsiyonel) Hangi özellik veya pakete bağlı
  disabled?: boolean;          // (Opsiyonel) Şimdilik devre dışı mı?
}
