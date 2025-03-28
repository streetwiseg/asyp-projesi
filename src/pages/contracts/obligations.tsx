import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Plus } from "lucide-react";

interface Obligation {
  id: string;
  title: string;
  deadline: string;
  responsible: string;
  completed: boolean;
}

const mockObligations: Obligation[] = [
  {
    id: "1",
    title: "Gizlilik yükümlülüğü bildirimi",
    deadline: "2025-04-01",
    responsible: "Yönetim",
    completed: false,
  },
  {
    id: "2",
    title: "Destek hizmeti başlangıç",
    deadline: "2025-03-28",
    responsible: "Teknik Ekip",
    completed: true,
  },
];

const Obligations = () => {
  const [obligations, setObligations] = useState(mockObligations);
  const [search, setSearch] = useState("");

  const filtered = obligations.filter((o) =>
    o.title.toLowerCase().includes(search.toLowerCase()) ||
    o.responsible.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📌 Yükümlülükler</h2>
        <Input
          placeholder="Yükümlülük veya sorumlu ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>📄 Başlık</TableHead>
              <TableHead>Son Tarih</TableHead>
              <TableHead>Sorumlu</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="font-medium">{o.title}</TableCell>
                <TableCell>{o.deadline}</TableCell>
                <TableCell>{o.responsible}</TableCell>
                <TableCell>
                  {o.completed ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" /> Tamamlandı
                    </span>
                  ) : (
                    <span className="flex items-center text-yellow-600">
                      <Clock className="w-4 h-4 mr-1" /> Bekleniyor
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="mt-6 text-right">
        <Button variant="default">
          <Plus className="w-4 h-4 mr-1" /> Yeni Yükümlülük Ekle
        </Button>
      </div>
    </div>
  );
};

export default Obligations;
