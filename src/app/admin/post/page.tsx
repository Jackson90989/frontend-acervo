"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

export default function AdminPostPage() {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const [type, setType] = useState<"book" | "game">("book");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  


  useEffect(() => {
    setHasMounted(true);
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsLogged(true);
    }
  }, [router]);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token || !file) {
      setError("Você precisa estar logado e selecionar um arquivo.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("file", file);



    try {
      await axios.post("https://backend-acervo-1.onrender.com/admin/post", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(`${type === "book" ? "Livro" : "Jogo"} postado com sucesso!`);
      setTitle("");
      setDescription("");
      setFile(null);
      setError("");
    } catch (err: any) {
      setError("Erro ao postar conteúdo");
      console.error(err);
    }
  };

  if (!hasMounted) return null;

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1 className={styles.title}>
          Postar {type === "book" ? "Livro" : "Jogo"}
        </h1>

        {isLogged && (
          <button
            type="button"
            className={styles.logout}
            onClick={() => {
              localStorage.removeItem("token");
              setIsLogged(false);
              router.push("/admin/login");
            }}
          >
            Sair
          </button>
        )}

        <div className={styles.toggle}>
          <label>
            <input
              type="radio"
              checked={type === "book"}
              onChange={() => setType("book")}
            />
            Livro
          </label>
          <label>
            <input
              type="radio"
              checked={type === "game"}
              onChange={() => setType("game")}
            />
            Jogo
          </label>
        </div>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.input}
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className={styles.textarea}
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
          className={styles.file}
          
        />

        <button type="submit" className={styles.submit}>
          Enviar
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}


