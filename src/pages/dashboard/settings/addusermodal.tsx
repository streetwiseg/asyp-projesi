import { useState } from "react";
import { Navigate } from "react-router-dom";
import { UserPlus, Lock, Mail, Briefcase } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toaster";

const AddUserModal = () => {
  const { user } = useAuth();

  // 🔒 Sadece Admin erişebilsin
  if (!user || user.role !== "Admin") {
    return <Navigate to="/dashboard" replace />;
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 📡 API isteği yapılabilir
    setTimeout(() => {
      toast("✅ Kullanıcı başarıyla eklendi. Giriş bilgileri e-posta ile gönderildi.");
      setFormData({ name: "", email: "", role: "", password: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center gap-2 mb-4">
        <UserPlus size={24} />
        <h2 className="fs-4 fw-bold mb-0">Kullanıcı Ekle</h2>
      </div>

      <Card className="p-4 p-md-5 shadow-sm border max-w-600px mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Ad Soyad */}
          <div className="mb-3">
            <Label htmlFor="name">Ad Soyad</Label>
            <Input
              id="name"
              name="name"
              placeholder="Örn: Ayşe Demir"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* E-posta */}
          <div className="mb-3">
            <Label htmlFor="email">
              E-posta <Mail size={14} className="ms-1" />
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="kullanici@firma.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Rol */}
          <div className="mb-3">
            <Label htmlFor="role">
              Rol <Briefcase size={14} className="ms-1" />
            </Label>
            <Input
              id="role"
              name="role"
              placeholder="Örn: Avukat, Finans Yetkilisi"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          {/* Şifre */}
          <div className="mb-4">
            <Label htmlFor="password">
              Şifre <Lock size={14} className="ms-1" />
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Geçici şifre (örnek: D^nO@Ojzik)"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <small className="text-muted">
              İlk giriş için bu şifre e-posta ile gönderilecektir.
            </small>
          </div>

          {/* Gönder Butonu */}
          <div className="d-grid">
            <Button type="submit" disabled={loading}>
              {loading ? "Ekleniyor..." : "Kullanıcıyı Ekle"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUserModal;
