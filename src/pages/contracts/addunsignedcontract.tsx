import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const AddUnsignedContract = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contractTitle: "",
    parties: "",
    description: "",
    file: undefined as File | undefined,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.contractTitle ||
      !formData.parties ||
      !formData.description ||
      !formData.file
    ) {
      toast.error("Lütfen tüm alanları doldurun ve dosya yükleyin.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("İmzasız sözleşme başarıyla oluşturuldu!");
      setFormData({
        companyName: "",
        contractTitle: "",
        parties: "",
        description: "",
        file: undefined,
      });
    }, 1500);
  };

  return (
    <Card className="max-w-3xl mx-auto mt-10">
      <CardContent className="space-y-6 p-6">
        <h2 className="text-2xl font-bold">İmzasız Sözleşme Ekle</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="companyName">Firma Adı</Label>
            <Input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Firma adı girin"
            />
          </div>
          <div>
            <Label htmlFor="contractTitle">Sözleşme Başlığı</Label>
            <Input
              name="contractTitle"
              value={formData.contractTitle}
              onChange={handleChange}
              placeholder="Sözleşme başlığı"
            />
          </div>
          <div>
            <Label htmlFor="parties">Taraflar</Label>
            <Input
              name="parties"
              value={formData.parties}
              onChange={handleChange}
              placeholder="Tarafları belirtin"
            />
          </div>
          <div>
            <Label htmlFor="description">Açıklama</Label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Sözleşmeye ilişkin açıklama"
            />
          </div>
          <div>
            <Label htmlFor="file">PDF Dosyası</Label>
            <Input type="file" accept="application/pdf" onChange={handleFileChange} />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Yükleniyor..." : "Sözleşmeyi Kaydet"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddUnsignedContract;
