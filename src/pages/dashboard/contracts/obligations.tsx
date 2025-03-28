// src/pages/dashboard/contracts/obligations.tsx

import { useState } from "react";
import { ClipboardList } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface Obligation {
  id: string;
  contract: string;
  company: string;
  description: string;
  dueDate: string;
  status: "Tamamlandı" | "Bekliyor";
}

const mockObligations: Obligation[] = [
  {
    id: "o1",
    contract: "Hizmet Satış Sözleşmesi",
    company: "ABC Ltd.",
    description: "Aylık raporlama gönderimi",
    dueDate: "2025-03-30",
    status: "Bekliyor",
  },
  {
    id: "o2",
    contract: "Gizlilik Sözleşmesi",
    company: "XYZ A.Ş.",
    description: "Veri silme taahhüdü",
    dueDate: "2025-03-20",
    status: "Tamamlandı",
  },
];

const Obligations = () => {
  const [search, setSearch] = useState("");

  const filtered = mockObligations.filter((item) =>
    item.company.toLowerCase().includes(search.toLowerCase()) ||
    item.contract.toLowerCase().includes(search.toLowerCase()) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <ClipboardList className="w-6 h-6" />
          Sözleşme Yükümlülükleri
        </h2>

        <Input
          placeholder="Firma, sözleşme veya durum ara..."
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
              <TableHead>Yükümlülük</TableHead>
              <TableHead>Son Tarih</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.company}</TableCell>
                  <TableCell>{item.contract}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted">
                  Yükümlülük bulunamadı.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Obligations;
