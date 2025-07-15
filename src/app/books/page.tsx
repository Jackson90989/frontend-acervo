"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.scss";

interface Book {
  id: number;
  title: string;
  description: string;
  filePath: string;
}

export default function Livros() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("https://backend-acervo-2.onrender.com/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Livros Disponíveis</h1>
      {books.length === 0 ? (
        <p className={styles.loading}>Carregando livros...</p>
      ) : (
        <div className={styles.grid}>
          {books.map((book) => (
            <div key={book.id} className={styles.card}>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <a
                href={`https://backend-acervo-2.onrender.com/${book.filePath}`}
                download
                target="_blank"
                className={styles.button}
              >
                📥 Baixar PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
