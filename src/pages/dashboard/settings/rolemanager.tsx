import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";

interface Role {
  id: number;
  name: string;
}

const RoleManager = () => {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: "Admin" },
    { id: 2, name: "Finans Yetkilisi" },
    { id: 3, name: "Sözleşme Takipçi" },
  ]);

  const [newRole, setNewRole] = useState("");
  const [editRoleId, setEditRoleId] = useState<number | null>(null);

  const handleAddRole = () => {
    if (!newRole.trim()) return;

    const newEntry: Role = {
      id: Date.now(),
      name: newRole.trim(),
    };

    setRoles((prev) => [...prev, newEntry]);
    setNewRole("");
    toast.success("Yeni rol eklendi.");
  };

  const handleDelete = (id: number) => {
    setRoles((prev) => prev.filter((r) => r.id !== id));
    toast.success("Rol silindi.");
  };

  const handleEdit = (role: Role) => {
    setEditRoleId(role.id);
    setNewRole(role.name);
  };

  const handleUpdate = () => {
    if (!newRole.trim() || editRoleId === null) return;

    setRoles((prev) =>
      prev.map((r) =>
        r.id === editRoleId ? { ...r, name: newRole.trim() } : r
      )
    );
    setEditRoleId(null);
    setNewRole("");
    toast.success("Rol güncellendi.");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Rol Yönetimi</h2>

      <Card className="p-5 space-y-4">
        <div className="d-flex gap-2">
          <Input
            placeholder="Yeni rol adı..."
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
          {editRoleId ? (
            <Button onClick={handleUpdate}>Güncelle</Button>
          ) : (
            <Button onClick={handleAddRole}>Ekle</Button>
          )}
        </div>

        <ul className="list-group mt-4">
          {roles.map((role) => (
            <li
              key={role.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{role.name}</span>
              <div className="d-flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleEdit(role)}>
                  <Pencil size={16} />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDelete(role.id)}>
                  <Trash2 size={16} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default RoleManager;
