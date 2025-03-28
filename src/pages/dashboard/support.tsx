import { useState } from "react";
import { HelpCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SupportPage = () => {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(form).some((field) => !field)) {
      alert("Lütfen tüm alanları eksiksiz doldurun.");
      return;
    }

    try {
      // API gönderimi burada yapılabilir
      setSuccess("✅ Destek talebiniz başarıyla iletildi. En kısa sürede size dönüş yapılacaktır.");
      setForm({ subject: "", email: "", message: "" });
      setTimeout(() => setSuccess(""), 5000);
    } catch (error) {
      console.error("Destek formu gönderilirken hata oluştu:", error);
      alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

  return (
    <div className="container py-5">
      {/* Başlık */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <HelpCircle size={24} />
        <h2 className="fs-3 fw-bold mb-0">Destek Talep Formu</h2>
      </div>

      <p className="text-muted mb-4" style={{ maxWidth: 700 }}>
        Teknik bir sorunla mı karşılaştınız? Her türlü destek ve iş birliği talepleriniz için bu formu kullanabilirsiniz. Destek ekibimiz en kısa sürede sizinle iletişime geçecektir.
      </p>

      {/* Başarılı Mesaj */}
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}

      {/* Form */}
      <Card className="p-4 p-md-5 shadow-sm border max-w-700px mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Label htmlFor="subject">Konu</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Konu başlığı girin"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <Label htmlFor="email">E-posta Adresi</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ornek@firma.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            <small className="text-muted">E-posta adresiniz sadece destek amacıyla kullanılacaktır.</small>
          </div>

          <div className="mb-4">
            <Label htmlFor="message">Destek Mesajınız</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Lütfen karşılaştığınız sorunu veya destek talebinizi detaylıca açıklayın..."
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid">
            <Button type="submit" className="btn btn-primary">
              <Send size={16} className="me-2" />
              Talebi Gönder
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SupportPage;
