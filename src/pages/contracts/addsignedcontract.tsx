import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const AddSignedContract = () => {
  const [contractName, setContractName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Geliştirme için: Backend entegrasyonu burada yapılacak.
    console.log("İmzalı Sözleşme Gönderiliyor:", {
      contractName,
      description,
      category,
      file,
    });

    // Formu temizle
    setContractName("");
    setDescription("");
    setCategory("");
    setFile(null);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">📄 İmzalı Sözleşme Ekle</h2>

      <Card>
        <CardContent className="space-y-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="contractName">Sözleşme Adı</Label>
              <Input
                id="contractName"
                value={contractName}
                onChange={(e) => setContractName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Açıklama</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="category">Kategori</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Örn: Hizmet, Gizlilik, Lisans vb."
              />
            </div>

            <div>
              <Label htmlFor="file">Sözleşme Dosyası (PDF)</Label>
              <Input
                id="file"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
              {file && (
                <p className="text-sm text-gray-600 mt-2">Seçilen dosya: {file.name}</p>
              )}
            </div>

            <Button type="submit" className="w-full text-lg py-6">
              Sözleşmeyi Kaydet
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddSignedContract;
