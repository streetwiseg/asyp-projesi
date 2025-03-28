// src/pages/dashboard/contracts/follow-up.tsx

import { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface FollowUpContract {
  id: string;
  title: string;
  company: string;
  responsible: string;
  followUpDate: string;
}

const mockFollowUpContracts: FollowUpContract[] = [
  { id: "f1", title: "Destek Sözleşmesi", company: "Tekno A.Ş.", responsible: "Ali Yılmaz", followUpDate: "2025-03-28" },
  { id: "f2", title: "Lisans Yenileme", company: "Netsoft", responsible: "Zeynep Demir", followUpDate: "2025-04-02" },
];

const FollowUpContracts = () => {
  const [search, setSearch] = useState("");

  const filtered = mockFollowUpContracts.filter((contract) =>
    contract.company.toLowerCase().includes(search.toLowerCase()) ||
    contract.title.toLowerCase().includes(search.toLowerCase()) ||
    contract.responsible.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <Eye className="w-6 h-6" />
          Takip Edilecek Sözleşmeler
        </h2>

        <Input
          placeholder="Firma, başlık veya sorumlu ara..."
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
              <TableHead>Sorumlu</TableHead>
              <TableHead>Takip Tarihi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.company}</TableCell>
                  <TableCell>{contract.title}</TableCell>
                  <TableCell>{contract.responsible}</TableCell>
                  <TableCell>{contract.followUpDate}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted">
                  Takip edilmesi gereken sözleşme bulunamadı.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default FollowUpContracts;
