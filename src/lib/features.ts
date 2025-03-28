import {
  Home,
  FilePlus,
  FileText,
  List,
  ClipboardCheck,
  CreditCard,
  DollarSign,
  Clock,
  Eye,
  RefreshCcw,
  UserPlus,
  BarChart,
  Settings,
  Brain,
  Users,
  FileSignature,
  BadgeCheck,
  AlertCircle,
  Timer,
  BarChart2,
  LifeBuoy,
} from "lucide-react";

// Create a map of icons for easier access and to avoid redundancy
const icons: { [key: string]: React.ElementType } = {
  Home,
  FilePlus,
  FileText,
  List,
  ClipboardCheck,
  CreditCard,
  DollarSign,
  Clock,
  Eye,
  RefreshCcw,
  UserPlus,
  BarChart,
  Settings,
  Brain,
  Users,
  FileSignature,
  BadgeCheck,
  AlertCircle,
  Timer,
  BarChart2,
  LifeBuoy,
};

// Sidebar navigasyonu
export const sidebarItems = [
  { label: "Anasayfa", route: "/dashboard", icon: icons.Home, featureKey: "dashboard" },

  // Sözleşmeler
  { label: "İmzalı Sözleşme Ekle", route: "/dashboard/contracts/add-signed", icon: icons.FilePlus, featureKey: "addSigned" },
  { label: "İmzasız Sözleşme Ekle", route: "/dashboard/contracts/add-unsigned", icon: icons.FileText, featureKey: "addUnsigned" },
  { label: "Sözleşmeler Listesi", route: "/dashboard/contracts/contract-list", icon: icons.List, featureKey: "contractList" },
  { label: "Yükümlülükler", route: "/dashboard/contracts/obligations", icon: icons.ClipboardCheck, featureKey: "obligations" },
  { label: "Ödemeler", route: "/dashboard/contracts/payments", icon: icons.CreditCard, featureKey: "payments" },
  { label: "Tahsilatlar", route: "/dashboard/contracts/collections", icon: icons.DollarSign, featureKey: "collections" },
  { label: "Süresi Dolan", route: "/dashboard/contracts/expired", icon: icons.Clock, featureKey: "expiredContracts" },
  { label: "Takip Edilen", route: "/dashboard/contracts/follow-up", icon: icons.Eye, featureKey: "followUp" },
  { label: "Yenilenmesi Gereken", route: "/dashboard/contracts/renew", icon: icons.RefreshCcw, featureKey: "renew" },
  { label: "Sözleşme Atama", route: "/dashboard/contracts/assign", icon: icons.UserPlus, featureKey: "assign" },

  // Raporlar
  { label: "Özet Rapor", route: "/dashboard/reports/summary", icon: icons.BarChart, featureKey: "summary" },
  { label: "Ayrıntılı Rapor", route: "/dashboard/reports/detail", icon: icons.BarChart, featureKey: "detail" },

  // AI
  { label: "Yapay Zeka Analizi", route: "/dashboard/ai-analysis", icon: icons.Brain, featureKey: "ai" },

  // Ayarlar
  { label: "Ayarlar", route: "/dashboard/settings", icon: icons.Settings, featureKey: "settings" },

  // Yardım / Destek
  { label: "Destek Talep", route: "/dashboard/support", icon: icons.LifeBuoy, featureKey: "support" },
];

// Dashboard'daki kartlı görünüm (isteğe bağlı kullanılabilir)
export interface FeatureItem {
  label: string;
  icon: React.ElementType;
  route: string;
  premium?: boolean;
}

export const features: FeatureItem[] = [
  { label: "Anasayfa", icon: icons.Home, route: "/dashboard" },
  { label: "İmzalı Sözleşme Ekle", icon: icons.FileSignature, route: "/dashboard/contracts/add-signed" },
  { label: "İmzasız Sözleşme Ekle", icon: icons.FilePlus, route: "/dashboard/contracts/add-unsigned" },
  { label: "Sözleşmeler Listesi", icon: icons.FileText, route: "/dashboard/contracts/contract-list" },
  { label: "Yükümlülükler", icon: icons.BadgeCheck, route: "/dashboard/contracts/obligations" },
  { label: "Ödemeler", icon: icons.CreditCard, route: "/dashboard/contracts/payments" },
  { label: "Tahsilatlar", icon: icons.Eye, route: "/dashboard/contracts/collections" },
  { label: "Süresi Dolan", icon: icons.Timer, route: "/dashboard/contracts/expired" },
  { label: "Takip Edilen", icon: icons.AlertCircle, route: "/dashboard/contracts/follow-up" },
  { label: "Yenilenmesi Gereken", icon: icons.RefreshCcw, route: "/dashboard/contracts/renew" },
  { label: "Sözleşme Atama", icon: icons.Users, route: "/dashboard/contracts/assign", premium: true },
  { label: "Yapay Zeka Analizi", icon: icons.Brain, route: "/dashboard/ai-analysis", premium: true },
  { label: "Özet Rapor", icon: icons.BarChart2, route: "/dashboard/reports/summary" },
  { label: "Ayrıntılı Rapor", icon: icons.BarChart2, route: "/dashboard/reports/detail" },
  { label: "Ayarlar", route: "/dashboard/settings", icon: icons.Settings, featureKey: "settings" },
  { label: "Destek Talep", icon: icons.LifeBuoy, route: "/dashboard/support" },
];

