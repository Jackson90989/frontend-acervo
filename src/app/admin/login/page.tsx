"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode";

interface TokenPayload {
  userId: number;
  email: string;
  approved: boolean;
  owner?: boolean;
  exp: number;
  iat: number;
}

export default function AdminLoginPage() {
  const [email, setText] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://backend-acervo-2.onrender.com/auth/login", {
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem("token", token);

      const decoded = jwtDecode<TokenPayload>(token);

      if (decoded.owner) {
        router.push("/admin/solicitacoes"); // Se for o Mendes, vai para página de aprovações
      } else {
        router.push("/admin/post"); // Usuários normais aprovados vão para postar conteúdo
      }
    } catch (err: any) {
      console.error(err);
      setError("Login inválido");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto", fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ marginBottom: "1rem", color: "#00f0ff", textShadow: "0 0 10px #00f0ff" }}>Login do Admin</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setText(e.target.value)}
        style={{
          display: "block",
          marginBottom: "1rem",
          width: "100%",
          padding: "0.75rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          outline: "none",
        }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          marginBottom: "1rem",
          width: "100%",
          padding: "0.75rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          outline: "none",
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "0.85rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#00ffea",
          color: "#000",
          fontWeight: "700",
          fontSize: "1.1rem",
          cursor: "pointer",
          boxShadow: "0 0 15px #00ffea",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#00c9b7")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#00ffea")}
      >
        Entrar
      </button>
      {error && <p style={{ color: "red", marginTop: "1rem", fontWeight: "700" }}>{error}</p>}
    </div>
  );
}
