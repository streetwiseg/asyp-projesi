// src/pages/dashboard/contracts/add-unsigned.tsx

import { useState } from "react";
import { FilePenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";


const AddUnsignedContract = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contractType, setContractType] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const contractTypes = ["Hizmet Sözleşmesi", "Lisans Sözleşmesi", "Gizlilik Anlaşması"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !file || !contractType) {
      alert("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    alert(`✅ İmzasız sözleşme başarıyla eklendi!
📄 Başlık: ${title}
📂 Tür: ${contractType}`);

    setTitle("");
    setDescription("");
    setContractType("");
    setFile(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
        <FilePenLine className="w-6 h-6" />
        İmzasız Sözleşme Ekle
      </h2>

      <Card className="p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="title">Sözleşme Başlığı</Label>
            <Input
              id="title"
              placeholder="Örn: Hizmet Sözleşmesi"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="contractType">Sözleşme Türü</Label>
            <Select value={contractType} onValueChange={(val) => setContractType(val)} required>
              {contractTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Açıklama</Label>
            <Textarea
              id="description"
              placeholder="Kısa açıklama..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="file">Sözleşme Dosyası (PDF)</Label>
            <Input
              id="file"
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
          </div>

          <div className="pt-4">
            <Button type="submit">Sözleşmeyi Oluştur</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUnsignedContract;
