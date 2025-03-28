import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface Contract {
  id: string;
  title: string;
  company: string;
  endDate: string;
}

const expiredContracts: Contract[] = [
  { id: "1", title: "Tedarik Sözleşmesi", company: "ABC Lojistik", endDate: "2025-03-15" },
  { id: "2", title: "Yazılım Bakım Anlaşması", company: "TechSoft", endDate: "2025-03-01" },
];

const ExpiredContracts = () => {
  const [search, setSearch] = useState("");

  const filtered = expiredContracts.filter(
    (contract) =>
      contract.title.toLowerCase().includes(search.toLowerCase()) ||
      contract.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-red-600">
          <AlertTriangle className="w-5 h-5" /> Süresi Dolmuş Sözleşmeler
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
              <TableHead>Bitiş Tarihi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell className="font-semibold text-red-600">{contract.title}</TableCell>
                <TableCell>{contract.company}</TableCell>
                <TableCell>{contract.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ExpiredContracts;
