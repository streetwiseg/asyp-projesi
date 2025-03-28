import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Register = () => {
  const { login } = useAuth(); // Gerçek backend bağlandığında register fonksiyonu eklenecek
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake kayıt işlemi
    login("demo-token", { email: form.email, name: form.name });
    navigate("/dashboard");
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: 500, width: "100%" }}>
        <h3 className="text-center mb-4">🏢 Kurumsal Üyelik</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Ad Soyad</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 mt-3">Kayıt Ol</button>
        </form>
        <div className="text-center mt-3">
          <small>
            Zaten hesabınız var mı? <a href="/login">Giriş Yap</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
