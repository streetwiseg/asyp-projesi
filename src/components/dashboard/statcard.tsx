// 📄 src/components/dashboard/StatCard.tsx

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number; // ✅ Gerçek sistemde sayı da olabilir
  icon: ReactNode;
  color?: "blue" | "green" | "yellow" | "red" | "slate";
}

const StatCard = ({ title, value, icon, color = "slate" }: StatCardProps) => {
  const colorMap: Record<string, string> = {
    blue: "text-primary bg-primary bg-opacity-10",
    green: "text-success bg-success bg-opacity-10",
    yellow: "text-warning bg-warning bg-opacity-10",
    red: "text-danger bg-danger bg-opacity-10",
    slate: "text-secondary bg-secondary bg-opacity-10",
  };

  return (
    <div className="bg-white rounded-3 shadow-sm p-3 d-flex align-items-center gap-3 h-100">
      <div className={cn("p-3 rounded-circle d-flex align-items-center justify-content-center", colorMap[color])} style={{ minWidth: 50, minHeight: 50 }}>
        {icon}
      </div>
      <div>
        <p className="text-muted small mb-1">{title}</p>
        <h5 className="fw-bold text-dark mb-0">{value}</h5>
      </div>
    </div>
  );
};

export default StatCard;
