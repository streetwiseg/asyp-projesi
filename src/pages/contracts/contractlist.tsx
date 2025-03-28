import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { FileText, Eye } from "lucide-react";

interface Contract {
  id: string;
  name: string;
  category: string;
  createdAt: string;
  status: "imzalı" | "imzasız";
}

const mockContracts: Contract[] = [
  {
    id: "1",
    name: "Gizlilik Sözleşmesi",
    category: "Gizlilik",
    createdAt: "2025-03-24",
    status: "imzalı",
  },
  {
    id: "2",
    name: "Hizmet Sözleşmesi",
    category: "Hizmet",
    createdAt: "2025-03-22",
    status: "imzasız",
  },
];

const ContractList = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Backend’den veri çekme burada yapılacak
    setContracts(mockContracts);
  }, []);

  const filteredContracts = contracts.filter(
    (contract) =>
      contract.name.toLowerCase().includes(search.toLowerCase()) ||
      contract.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📋 Sözleşmeler Listesi</h2>
        <Input
          placeholder="Sözleşme adı ya da kategori ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>📄 Adı</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Oluşturulma</TableHead>
              <TableHead className="text-right">İşlem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell className="font-medium">{contract.name}</TableCell>
                <TableCell>{contract.category}</TableCell>
                <TableCell>
                  <span className={`text-sm px-2 py-1 rounded-full ${contract.status === "imzalı" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {contract.status}
                  </span>
                </TableCell>
                <TableCell>{contract.createdAt}</TableCell>
                <TableCell className="text-right">
                  <Button variant="secondary" size="sm">
                    <Eye className="w-4 h-4 mr-1" /> Görüntüle
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ContractList;
