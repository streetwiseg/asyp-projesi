// src/pages/dashboard/contracts/payments.tsx

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface Payment {
  id: string;
  company: string;
  contract: string;
  amount: number;
  dueDate: string;
  status: "Ödendi" | "Bekliyor";
}

const mockPayments: Payment[] = [
  {
    id: "p1",
    company: "ABC Ltd.",
    contract: "Lisans Sözleşmesi",
    amount: 2500,
    dueDate: "2025-03-25",
    status: "Bekliyor",
  },
  {
    id: "p2",
    company: "XYZ A.Ş.",
    contract: "Hizmet Sözleşmesi",
    amount: 4200,
    dueDate: "2025-03-15",
    status: "Ödendi",
  },
];

const Payments = () => {
  const [search, setSearch] = useState("");

  const filtered = mockPayments.filter((p) =>
    p.company.toLowerCase().includes(search.toLowerCase()) ||
    p.contract.toLowerCase().includes(search.toLowerCase()) ||
    p.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <CreditCard className="w-6 h-6" />
          Sözleşme Ödemeleri
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
              <TableHead>Tutar</TableHead>
              <TableHead>Son Tarih</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.company}</TableCell>
                  <TableCell>{p.contract}</TableCell>
                  <TableCell>
                    {p.amount.toLocaleString("tr-TR", {
                      style: "currency",
                      currency: "TRY",
                    })}
                  </TableCell>
                  <TableCell>{p.dueDate}</TableCell>
                  <TableCell>{p.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted">
                  Ödeme kaydı bulunamadı.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Payments;
