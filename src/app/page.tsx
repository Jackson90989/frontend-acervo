"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    router.push("/admin/login");
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Home
          </Link>
          <Link href="/books" className={pathname === "/books" ? styles.active : ""}>
            Livros
          </Link>
          <Link href="/games" className={pathname === "/games" ? styles.active : ""}>
            Jogos
          </Link>
          <Link href="/Sobre" className={pathname === "/about" ? styles.active : ""}>
            Sobre
          </Link>
          {!isLogged && (
            <>
              <Link href="/admin/login" className={pathname === "/admin/login" ? styles.active : ""}>
                Login
              </Link>
              <Link href="/admin/register" className={pathname === "/admin/register" ? styles.active : ""}>
                Cadastrar
              </Link>
            </>
          )}

          {isLogged && (
            <>
              <Link href="/admin/post" className={pathname === "/admin/post" ? styles.active : ""}>
                Postar Conteúdo
              </Link>
              <button className={styles.logoutBtn} onClick={handleLogout}>
                Sair
              </button>
            </>
          )}
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Bem-vindo ao nosso Acervo </h1>
          <p>
            Aqui você encontra livros em PDF e jogos em Python para baixar gratuitamente.
            Administradores podem postar novos conteúdos para toda a comunidade.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/books" className={styles.buttonPrimary}>
              Ver Livros
            </Link>
            <Link href="/games" className={styles.buttonSecondary}>
              Ver Jogos
            </Link>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>O que nossos usuários dizem</h2>
          <div className={styles.testimonialList}>
            <blockquote>
              <p>
                "A biblioteca digital é fantástica! Encontrei ótimos livros para meus estudos."
              </p>
              <footer>– Ana Silva</footer>
            </blockquote>

            <blockquote>
              <p>
                "Os jogos em Python são incríveis e fáceis de baixar. Recomendo muito!"
              </p>
              <footer>– João Pereira</footer>
            </blockquote>

            <blockquote>
              <p>
                "A interface é simples e prática, além do conteúdo ser gratuito. Excelente!"
              </p>
              <footer>– Mariana Costa</footer>
            </blockquote>
          </div>
        </section>
      </main>
    </>
  );
}
