// src/pages/dashboard/contracts/collections.tsx

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Search, Plus } from "lucide-react";

interface Collection {
  id: string;
  payer: string;
  amount: number;
  date: string;
  method: string;
}

const mockCollections: Collection[] = [
  { id: "c1", payer: "ABC Ltd.", amount: 2500, date: "2025-03-20", method: "Banka Havalesi" },
  { id: "c2", payer: "XYZ A.Ş.", amount: 1800, date: "2025-03-10", method: "Kredi Kartı" },
  { id: "c3", payer: "Mavi Bilgi", amount: 3200, date: "2025-03-05", method: "EFT" },
];

const Collections = () => {
  const [collections, setCollections] = useState(mockCollections);
  const [search, setSearch] = useState("");

  const filtered = collections.filter((c) =>
    c.payer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">💰 Tahsilatlar</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Firma adı ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <Button variant="outline">
            <Search className="w-4 h-4 mr-1" /> Ara
          </Button>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Firma</TableHead>
              <TableHead>Tutar</TableHead>
              <TableHead>Tarih</TableHead>
              <TableHead>Yöntem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.payer}</TableCell>
                <TableCell>{c.amount.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}</TableCell>
                <TableCell>{c.date}</TableCell>
                <TableCell>{c.method}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="text-right">
        <Button>
          <Plus className="w-4 h-4 mr-2" /> Yeni Tahsilat Ekle
        </Button>
      </div>
    </div>
  );
};

export default Collections;
