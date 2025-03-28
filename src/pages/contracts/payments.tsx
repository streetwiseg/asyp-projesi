import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Plus } from "lucide-react";

interface Payment {
  id: string;
  title: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending";
}

const mockPayments: Payment[] = [
  {
    id: "1",
    title: "1. Taksit Ödemesi",
    amount: 1500,
    dueDate: "2025-03-15",
    status: "paid",
  },
  {
    id: "2",
    title: "2. Taksit Ödemesi",
    amount: 1500,
    dueDate: "2025-04-15",
    status: "pending",
  },
];

const Payments = () => {
  const [payments, setPayments] = useState(mockPayments);
  const [search, setSearch] = useState("");

  const filtered = payments.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">💳 Sözleşme Ödemeleri</h2>
        <Input
          placeholder="Ödeme başlığı ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Başlık</TableHead>
              <TableHead>Tutar</TableHead>
              <TableHead>Son Tarih</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.title}</TableCell>
                <TableCell>{p.amount.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}</TableCell>
                <TableCell>{p.dueDate}</TableCell>
                <TableCell>
                  {p.status === "paid" ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" /> Ödendi
                    </span>
                  ) : (
                    <span className="flex items-center text-yellow-600">
                      <Clock className="w-4 h-4 mr-1" /> Bekliyor
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="mt-6 text-right">
        <Button>
          <Plus className="w-4 h-4 mr-1" /> Yeni Ödeme Ekle
        </Button>
      </div>
    </div>
  );
};

export default Payments;
