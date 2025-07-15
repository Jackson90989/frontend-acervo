"use client";
import styles from "./page.module.scss";
import image1 from '../../../public/github.svg'
import image2 from '../../../public/nodejs.svg'
import image3 from '../../../public/postgresql.svg'
import image4 from '../../../public/python.svg'
import image5 from '../../../public/react.svg'
import image6 from '../../../public/typescript.svg'
import image7 from '../../../public/nextjs.svg'
import image8 from '../../../public/ChatGPT Image 15 de jul. de 2025, 19_22_13.png'
import Image from "next/image";


export default function SobrePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sobre Mim</h1>
        <div className={styles.card}>
          <img
            src={image8.src}
            alt="Jackson"
            className={styles.avatar}
          />
          <div className={styles.text}>
            <h2>Jackson Rodrigues</h2>
            <p>
              Sou Jackson, estudante júnior apaixonado por tecnologia e experiências digitais.
              Sigo estudando para dominar o universo web.
            </p>
            <p>
              Atualmente estudo e aplico tecnologias como Node.js, React, Python, PostgreSQL, JavaScript, NextJS e interfaces modernas.
            </p>
            <p>
              No tempo livre gosto de jogar RPGs clássicos e mergulhar em ficção científica.
            </p>
            <div className={styles.links}>
              <a href="mailto:jacksonrodriguessilva2@gmail.com">
                Email
              </a>
<a href="https://github.com/Jackson90989" target="_blank">
  <Image src={image1} alt="GitHub" />
  GitHub
</a>
            </div>
          </div>
        </div>

        <div className={styles.techs}>
<div className={styles.techs}>
  <div className={styles.techItem}>
    <img src={image3.src} alt="PostgreSQL" />
    <span className={styles.tooltip}>PostgreSQL</span>
  </div>
  <div className={styles.techItem}>
    <img src={image2.src} alt="Node.js" />
    <span className={styles.tooltip}>Node.js</span>
  </div>
  <div className={styles.techItem}>
    <img src={image5.src} alt="React" />
    <span className={styles.tooltip}>React</span>
  </div>
  <div className={styles.techItem}>
    <img src={image4.src} alt="Python" />
    <span className={styles.tooltip}>Python</span>
  </div>
  <div className={styles.techItem}>
    <img src={image6.src} alt="TypeScript" />
    <span className={styles.tooltip}>TypeScript</span>
  </div>
   <div className={styles.techItem}>
    <img src={image7.src} alt="NextJS" />
    <span className={styles.tooltip}>NextJS</span>
  </div>
</div>

</div>
      </div>
    </div>
  );
}
