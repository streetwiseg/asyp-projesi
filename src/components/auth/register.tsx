// src/components/auth/Register.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/userSlice";  // Redux ile kullanıcı işlemi
import { Input, Button } from "../ui";  // UI bileşenleri

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(registerUser({ fullName, email, password }));
      navigate("/dashboard");  // Kayıt başarılı olursa dashboard'a yönlendirme
    } catch (err) {
      setError("Kayıt işlemi sırasında hata oluştu!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ad Soyad"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
        <Button type="submit">Kayıt Ol</Button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
