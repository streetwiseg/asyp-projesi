// src/pages/dashboard/contracts/add-signed.tsx

import { useState } from "react";
import { FilePlus2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AddSignedContract = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !file) {
      alert("Lütfen başlık ve imzalı sözleşme dosyasını yükleyin.");
      return;
    }

    // Geçici başarı mesajı
    alert(`✅ Sözleşme başarıyla yüklendi!\n\n📄 Başlık: ${title}`);

    // Temizleme
    setTitle("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
        <FilePlus2 className="w-6 h-6" />
        İmzalı Sözleşme Ekle
      </h2>

      <Card className="p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="title">Sözleşme Başlığı</Label>
            <Input
              id="title"
              placeholder="Örn: Gizlilik Sözleşmesi"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Açıklama (Opsiyonel)</Label>
            <Textarea
              id="description"
              placeholder="Kısa açıklama yazabilirsiniz..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="file">İmzalı PDF Dosyası</Label>
            <Input
              id="file"
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
          </div>

          <div className="pt-4">
            <Button type="submit">Sözleşmeyi Yükle</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddSignedContract;
