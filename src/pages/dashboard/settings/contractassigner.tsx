// 📄 src/pages/dashboard/settings/contractassigner.tsx

import React, { useEffect, useState } from "react";
import api from "@/services/api";
import { toast } from "react-toastify";

const ContractAssigner = () => {
  const [users, setUsers] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedContract, setSelectedContract] = useState("");
  const [loading, setLoading] = useState(false);

  // 📦 Kullanıcı ve sözleşmeleri çek
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, contractsRes] = await Promise.all([
          api.get("/users"),
          api.get("/contracts"),
        ]);
        setUsers(usersRes.data);
        setContracts(contractsRes.data);
      } catch (err) {
        toast.error("❌ Kullanıcı veya sözleşmeler alınamadı.");
        console.error("Veri çekme hatası:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ Sözleşme atama işlemi
  const handleAssign = async () => {
    if (!selectedUser || !selectedContract) {
      toast.warning("⚠️ Lütfen kullanıcı ve sözleşme seçiniz.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/assignments", {
        user_id: selectedUser,
        contract_id: selectedContract,
      });
      toast.success("✅ Sözleşme başarıyla atandı.");
      setSelectedUser("");
      setSelectedContract("");
    } catch (err) {
      toast.error("❌ Atama işlemi başarısız.");
      console.error("Atama hatası:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Sözleşme Atama</h3>

      <div className="row g-3 align-items-end">
        <div className="col-md-5">
          <label className="form-label">Kullanıcı Seç</label>
          <select
            className="form-select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">Seçiniz</option>
            {users.map((user: any) => (
              <option key={user.id} value={user.id}>
                {user.full_name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-5">
          <label className="form-label">Sözleşme Seç</label>
          <select
            className="form-select"
            value={selectedContract}
            onChange={(e) => setSelectedContract(e.target.value)}
          >
            <option value="">Seçiniz</option>
            {contracts.map((contract: any) => (
              <option key={contract.id} value={contract.id}>
                {contract.title}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2 d-grid">
          <button
            className="btn btn-primary"
            onClick={handleAssign}
            disabled={loading}
          >
            {loading ? "Atanıyor..." : "Ata"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractAssigner;
