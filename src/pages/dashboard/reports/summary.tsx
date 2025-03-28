// src/pages/dashboard/reports/summary.tsx

import React from 'react';
import { BarChart2, FileText, DollarSign, Timer, ClipboardList } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

const summaryData = [
  { name: "İmzalı", value: 22 },
  { name: "İmzasız", value: 13 },
  { name: "Tahsilat", value: 14 },
  { name: "Ödeme", value: 9 },
  { name: "Sona Eren", value: 5 },
];

const SummaryReports = () => {
  // Error handling for summaryData
  if (!Array.isArray(summaryData) || summaryData.length === 0) {
    return <div className="container py-4">No data available for summary reports.</div>;
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4 fw-bold fs-3 d-flex align-items-center gap-2 text-primary">
        <BarChart2 className="me-2" size={24} /> Özet Raporlar
      </h1>

      <div className="row g-4">
        {/* Sözleşme Durumu Grafiği */}
        <div className="col-md-6">
          <Card className="p-4">
            <h5 className="mb-4 fw-semibold">Sözleşme Durumu</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={summaryData}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#0d6efd" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Önemli Göstergeler */}
        <div className="col-md-6">
          <Card className="p-4 d-flex flex-column gap-3">
            <h5 className="mb-3 fw-semibold">Önemli Göstergeler</h5>
            <Stat icon={<FileText size={20} />} label="Toplam Sözleşme" value="35" />
            <Stat icon={<ClipboardList size={20} />} label="Aktif Yükümlülük" value="12" />
            <Stat icon={<DollarSign size={20} />} label="Toplam Tahsilat" value="₺85.000" />
            <Stat icon={<Timer size={20} />} label="Yaklaşan Bitişler" value="3" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SummaryReports;

// Göstergeler bileşeni
const Stat = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => {
  // Error handling for Stat component props
  if (!icon || !label || value === undefined) {
    console.error("Stat component is missing required props:", { icon, label, value });
    return null;
  }

  return (
    <div className="d-flex align-items-center gap-3 text-secondary">
      <div className="bg-light p-2 rounded-circle border">{icon}</div>
      <div>
        <div className="small text-muted">{label}</div>
        <div className="fw-semibold">{value}</div>
      </div>
    </div>
  );
};
