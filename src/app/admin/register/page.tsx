"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await axios.post("https://backend-acervo-2.onrender.com/auth/register", {
        email,
        password,
      });

      alert("Cadastro realizado com sucesso!");
      router.push("/admin/login");
    } catch (err: any) {
      console.error("Erro no cadastro:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Erro ao cadastrar");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Cadastro de Admin</h1>
      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <input
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <button onClick={handleRegister}>Cadastrar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
