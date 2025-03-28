// src/pages/dashboard/contracts/assigncontract.tsx

import { useState } from "react";
import { UserPlus2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";


interface Contract {
  id: string;
  title: string;
}

interface User {
  id: string;
  name: string;
}

const dummyContracts: Contract[] = [
  { id: "s1", title: "Gizlilik Sözleşmesi" },
  { id: "s2", title: "Hizmet Satış Sözleşmesi" },
  { id: "s3", title: "Lisans Kullanım Sözleşmesi" },
];

const dummyUsers: User[] = [
  { id: "u1", name: "Ali Yılmaz" },
  { id: "u2", name: "Zeynep Demir" },
  { id: "u3", name: "Mehmet Kaya" },
];

const AssignContractPage = () => {
  const [selectedContract, setSelectedContract] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const handleAssign = () => {
    if (selectedContract && selectedUser) {
      alert(`✅ Sözleşme başarıyla atandı!
📄 Sözleşme: ${selectedContract}
👤 Kullanıcı: ${selectedUser}`);
      setSelectedContract("");
      setSelectedUser("");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
        <UserPlus2 className="w-6 h-6" />
        Sözleşme Atama
      </h2>

      <Card className="p-6 space-y-4 max-w-xl">
        <div>
          <Label className="mb-1 block">Sözleşme Seç</Label>
          <Select value={selectedContract} onValueChange={(val) => setSelectedContract(val)}>
            {dummyContracts.map((contract) => (
              <SelectItem key={contract.id} value={contract.title}>
                {contract.title}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1 block">Kullanıcı Seç</Label>
          <Select value={selectedUser} onValueChange={(val) => setSelectedUser(val)}>
            {dummyUsers.map((user) => (
              <SelectItem key={user.id} value={user.name}>
                {user.name}
              </SelectItem>
            ))}
          </Select>
        </div>

        <Button
          disabled={!selectedContract || !selectedUser}
          onClick={handleAssign}
          className="mt-4"
        >
          Atamayı Gerçekleştir
        </Button>
      </Card>
    </div>
  );
};

export default AssignContractPage;
