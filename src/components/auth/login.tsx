// src/components/auth/Login.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";  // Redux ile giriş işlemi
import { Input, Button } from "../ui";  // UI bileşenleri

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
      navigate("/dashboard");  // Giriş başarılı olursa dashboard'a yönlendirme
    } catch (err) {
      setError("Giriş işlemi sırasında hata oluştu!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Giriş Yap</Button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
