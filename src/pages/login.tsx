// 📄 src/pages/Login.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/axios"; // axios instance
import { setToken, setUser } from "@/lib/auth"; // token ve user setterlar

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("soner@asyp.com");
  const [password, setPassword] = useState("soner1234");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/auth/login", { email, password });

      const { access_token, user } = response.data;

      if (!access_token) throw new Error("Token alınamadı.");

      setToken(access_token);
      setUser(user || {}); // boş ise bile {} kaydetsin

      login(access_token, user || {}); // context'e de güvenli gönder
      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h3 className="text-center mb-4">Giriş Yap</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
