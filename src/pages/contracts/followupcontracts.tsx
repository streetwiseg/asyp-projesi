import { useState } from "react";
import { Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FollowUpContract {
  id: string;
  title: string;
  company: string;
  reason: string;
}

const followUpContracts: FollowUpContract[] = [
  {
    id: "1",
    title: "Danışmanlık Sözleşmesi",
    company: "ProLegal",
    reason: "Son ödeme tarihi yaklaşıyor",
  },
  {
    id: "2",
    title: "Destek Anlaşması",
    company: "Teknoray",
    reason: "Müşteri notu: Yeni teklif gönderilmeli",
  },
];

const FollowUpContracts = () => {
  const [search, setSearch] = useState("");

  const filtered = followUpContracts.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-600">
          <Eye className="w-5 h-5" /> Takip Edilmesi Gereken Sözleşmeler
        </h2>
        <Input
          placeholder="Firma veya başlık ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Başlık</TableHead>
              <TableHead>Firma</TableHead>
              <TableHead>Takip Nedeni</TableHead>
              <TableHead className="text-right">Aksiyon</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell className="font-medium">{contract.title}</TableCell>
                <TableCell>{contract.company}</TableCell>
                <TableCell>{contract.reason}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Detay</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default FollowUpContracts;
