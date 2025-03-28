import { UserPlus2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";


const dummyContracts = [
  { id: 1, title: "Gizlilik Sözleşmesi" },
  { id: 2, title: "Hizmet Satış Sözleşmesi" },
];

const dummyUsers = [
  { id: 1, name: "Ali Yılmaz" },
  { id: 2, name: "Zeynep Demir" },
  { id: 3, name: "Mehmet Kaya" },
];

const AssignContract = () => {
  const [selectedContract, setSelectedContract] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const handleAssign = () => {
    if (selectedContract && selectedUser) {
      alert(`✅ Sözleşme başarıyla atandı! 
Sözleşme: ${selectedContract}
Kullanıcı: ${selectedUser}`);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
        <UserPlus2 className="w-6 h-6" /> Sözleşme Atama
      </h2>

      <Card className="p-6 space-y-4">
        <div>
          <label className="block font-medium mb-1">Sözleşme Seç</label>
          <Select onValueChange={(val) => setSelectedContract(val)}>
            {dummyContracts.map((contract) => (
              <SelectItem key={contract.id} value={contract.title}>
                {contract.title}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div>
          <label className="block font-medium mb-1">Kullanıcı Seç</label>
          <Select onValueChange={(val) => setSelectedUser(val)}>
            {dummyUsers.map((user) => (
              <SelectItem key={user.id} value={user.name}>
                {user.name}
              </SelectItem>
            ))}
          </Select>
        </div>

        <Button disabled={!selectedContract || !selectedUser} onClick={handleAssign}>
          Ata
        </Button>
      </Card>
    </div>
  );
};

export default AssignContract;
