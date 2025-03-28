// src/pages/dashboard/contracts/renew.tsx

import { useState } from "react";
import { RefreshCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface ContractToRenew {
  id: string;
  company: string;
  title: string;
  endDate: string;
}

const mockRenewList: ContractToRenew[] = [
  { id: "r1", company: "ABC Ltd.", title: "Gizlilik Sözleşmesi", endDate: "2025-03-30" },
  { id: "r2", company: "XYZ A.Ş.", title: "Hizmet Sözleşmesi", endDate: "2025-04-05" },
];

const RenewContracts = () => {
  const [search, setSearch] = useState("");

  const filtered = mockRenewList.filter((c) =>
    c.company.toLowerCase().includes(search.toLowerCase()) ||
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleRenew = (contractId: string) => {
    const contract = mockRenewList.find((c) => c.id === contractId);
    alert(`✅ ${contract?.title} sözleşmesi için yenileme talebi oluşturuldu!`);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <RefreshCcw className="w-6 h-6" />
          Yenilenmesi Gereken Sözleşmeler
        </h2>

        <Input
          placeholder="Firma veya sözleşme adı ara..."
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
              <TableHead>Bitiş Tarihi</TableHead>
              <TableHead>İşlem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.company}</TableCell>
                  <TableCell>{c.title}</TableCell>
                  <TableCell>{c.endDate}</TableCell>
                  <TableCell>
                    <Button size="sm" onClick={() => handleRenew(c.id)}>
                      Yenile
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted">
                  Yenilenmesi gereken sözleşme bulunamadı.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default RenewContracts;
