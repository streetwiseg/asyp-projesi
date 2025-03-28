// src/pages/dashboard/contracts/list.tsx

import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface Contract {
  id: string;
  title: string;
  company: string;
  status: "İmzalı" | "İmzasız";
  startDate: string;
  endDate: string;
}

const mockContracts: Contract[] = [
  { id: "c1", title: "Gizlilik Sözleşmesi", company: "ABC Ltd.", status: "İmzalı", startDate: "2024-01-01", endDate: "2024-12-31" },
  { id: "c2", title: "Hizmet Satış Sözleşmesi", company: "XYZ A.Ş.", status: "İmzasız", startDate: "2025-03-01", endDate: "2026-03-01" },
  { id: "c3", title: "Lisans Kullanımı", company: "Netsoft", status: "İmzalı", startDate: "2023-06-01", endDate: "2024-06-01" },
];

const ContractList = () => {
  const [search, setSearch] = useState("");

  const filtered = mockContracts.filter((contract) =>
    contract.company.toLowerCase().includes(search.toLowerCase()) ||
    contract.title.toLowerCase().includes(search.toLowerCase()) ||
    contract.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <FileText className="w-6 h-6" />
          Sözleşme Listesi
        </h2>

        <Input
          placeholder="Firma, başlık veya durum ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Firma</TableHead>
              <TableHead>Sözleşme</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Başlangıç</TableHead>
              <TableHead>Bitiş</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.company}</TableCell>
                  <TableCell>{contract.title}</TableCell>
                  <TableCell>{contract.status}</TableCell>
                  <TableCell>{contract.startDate}</TableCell>
                  <TableCell>{contract.endDate}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted">
                  Sözleşme bulunamadı.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ContractList;
