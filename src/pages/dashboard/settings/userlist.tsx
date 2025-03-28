import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "react-bootstrap";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  fullName: string;
  email: string;
  role: string;
  contracts: string[];
}

const mockUsers: User[] = [
  {
    id: 1,
    fullName: "Ali Yılmaz",
    email: "ali@holding.com",
    role: "Finans Yetkilisi",
    contracts: ["Hizmet Sözleşmesi", "Tahsilat Protokolü"],
  },
  {
    id: 2,
    fullName: "Ayşe Demir",
    email: "ayse@holding.com",
    role: "Sözleşme Takipçi",
    contracts: ["Gizlilik Sözleşmesi"],
  },
];

const UserList = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    toast.success("Kullanıcı silindi.");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Kullanıcı Listesi</h2>

      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ad Soyad</TableHead>
              <TableHead>E-posta</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Atanmış Sözleşmeler</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge bg="secondary">{user.role}</Badge>
                </TableCell>
                <TableCell>
                  {user.contracts.map((c, i) => (
                    <Badge key={i} bg="info" className="me-1">
                      {c}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell className="text-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    <Trash2 size={16} />
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

export default UserList;
