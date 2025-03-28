import { RefreshCcw } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RenewContract {
  id: string;
  title: string;
  company: string;
  expiryDate: string;
}

const renewContracts: RenewContract[] = [
  {
    id: "1",
    title: "Bakım Hizmeti Sözleşmesi",
    company: "Netpro IT",
    expiryDate: "2025-04-10",
  },
  {
    id: "2",
    title: "Danışmanlık Anlaşması",
    company: "Yazılım Deryası",
    expiryDate: "2025-04-18",
  },
];

const RenewContracts = () => {
  const [search, setSearch] = useState("");

  const filtered = renewContracts.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-600">
          <RefreshCcw className="w-5 h-5" /> Yenilenmesi Gereken Sözleşmeler
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
              <TableHead>Son Tarih</TableHead>
              <TableHead className="text-right">Aksiyon</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell className="font-medium">{contract.title}</TableCell>
                <TableCell>{contract.company}</TableCell>
                <TableCell>{contract.expiryDate}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">Yenile</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default RenewContracts;
