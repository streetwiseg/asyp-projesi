// src/pages/dashboard/contracts/expired.tsx

import { useState } from "react";
import { CalendarX2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface ExpiredContract {
  id: string;
  title: string;
  company: string;
  endDate: string;
}

const mockExpiredContracts: ExpiredContract[] = [
  { id: "e1", title: "Gizlilik Sözleşmesi", company: "ABC Ltd.", endDate: "2024-12-31" },
  { id: "e2", title: "Hizmet Sözleşmesi", company: "XYZ A.Ş.", endDate: "2025-01-15" },
  { id: "e3", title: "Destek Anlaşması", company: "Mavi Bilgi", endDate: "2025-02-10" },
];

const ExpiredContracts = () => {
  const [search, setSearch] = useState("");

  const filtered = mockExpiredContracts.filter((contract) =>
    contract.company.toLowerCase().includes(search.toLowerCase()) ||
    contract.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <CalendarX2 className="w-6 h-6" />
          Süresi Dolmuş Sözleşmeler
        </h2>

        <div className="flex gap-2">
          <Input
            placeholder="Firma veya başlık ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Firma</TableHead>
              <TableHead>Sözleşme</TableHead>
              <TableHead>Bitiş Tarihi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.company}</TableCell>
                  <TableCell>{contract.title}</TableCell>
                  <TableCell>{contract.endDate}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-muted">
                  Süresi dolmuş sözleşme bulunamadı.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ExpiredContracts;
