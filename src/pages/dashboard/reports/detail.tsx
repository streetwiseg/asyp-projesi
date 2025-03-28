// src/pages/dashboard/reports/detail.tsx

import { useState } from "react";
import { FileBarChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

interface DetailedReport {
  id: string;
  contract: string;
  company: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  status: "İmzalı" | "İmzasız";
}

// Geçici mock veri
const mockDetailedReports: DetailedReport[] = [
  {
    id: "r1",
    contract: "Hizmet Sözleşmesi",
    company: "ABC Ltd.",
    createdBy: "Ali Yılmaz",
    createdAt: "2024-11-15",
    updatedAt: "2025-02-10",
    status: "İmzalı",
  },
  {
    id: "r2",
    contract: "Gizlilik Sözleşmesi",
    company: "XYZ A.Ş.",
    createdBy: "Zeynep Demir",
    createdAt: "2024-09-01",
    updatedAt: "2025-01-28",
    status: "İmzasız",
  },
];

const DetailedReports = () => {
  const [search, setSearch] = useState("");

  const filteredReports = mockDetailedReports.filter((item) =>
    [item.contract, item.company, item.createdBy, item.status]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      {/* Başlık ve Arama */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fs-4 fw-bold d-flex align-items-center gap-2 text-primary">
          <FileBarChart size={24} /> Ayrıntılı Raporlar
        </h1>

        <Input
          placeholder="Firma, sözleşme veya durum ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-auto"
          style={{ maxWidth: 320 }}
        />
      </div>

      {/* Rapor Tablosu */}
      <Card className="p-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Firma</TableHead>
              <TableHead>Sözleşme</TableHead>
              <TableHead>Oluşturan</TableHead>
              <TableHead>Oluşturulma</TableHead>
              <TableHead>Güncellenme</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.length > 0 ? (
              filteredReports.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.company}</TableCell>
                  <TableCell>{item.contract}</TableCell>
                  <TableCell>{item.createdBy}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>{item.updatedAt}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted">
                  Aramanıza uygun rapor bulunamadı.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default DetailedReports;
