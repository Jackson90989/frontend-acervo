"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.scss";

interface Game {
  id: number;
  title: string;
  description: string;
  filePath: string;
}

export default function Jogos() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios.get("https://backend-acervo-2.onrender.com/games").then((res) => {
      setGames(res.data);
    });
  }, []);

  return (
    <main className={styles.page}>
      <h1 className={styles.pageTitle}>Jogos em Python</h1>
      <div className={styles.cards}>
        {games.map((game) => (
          <div key={game.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{game.title}</h2>
            <p className={styles.cardDescription}>{game.description}</p>
            <a
              href={`https://backend-acervo-2.onrender.com/${game.filePath}`}
              download
              target="_blank"
              className={styles.cardButton}
              rel="noreferrer"
            >
              Baixar Jogo
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
