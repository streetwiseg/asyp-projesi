// 📄 src/types/index.ts

// Kullanıcı Modeli
export interface User {
  id: string;
  full_name: string;
  email: string;
  role: "superadmin" | "admin" | "user";
  company_name?: string;
  position?: string;
  tax_number?: string;
  address?: string;
  has_active_package?: boolean;
}

// Sözleşme Modeli
export interface Contract {
  id: string;
  title: string;
  type: "signed" | "unsigned";
  status: "active" | "expired" | "draft";
  assigned_to?: string; // kullanıcı id
  created_at: string;
  updated_at?: string;
  start_date?: string;
  end_date?: string;
  obligations?: Obligation[];
  payments?: Payment[];
  collections?: Collection[];
}

// Yükümlülük (Obligation)
export interface Obligation {
  id: string;
  description: string;
  due_date: string;
  is_completed: boolean;
}

// Ödeme (Payment)
export interface Payment {
  id: string;
  contract_id: string;
  payer: string;
  amount: number;
  date: string;
  method: string;
}

// Tahsilat (Collection)
export interface Collection {
  id: string;
  contract_id: string;
  payer: string;
  amount: number;
  date: string;
  method: string;
}

// Rapor
export interface Report {
  id: string;
  period: string;
  total_contracts: number;
  signed_contracts: number;
  unsigned_contracts: number;
  obligations_completed: number;
  payments_made: number;
  collections_received: number;
}

// Dashboard Kartları
export interface DashboardStat {
  title: string;
  value: string | number;
  icon?: JSX.Element;
  trend?: "up" | "down";
  change_rate?: number;
}
