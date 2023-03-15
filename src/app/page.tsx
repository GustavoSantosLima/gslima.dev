import { Github, LinkedIn } from "@/helpers/Icons";
import styles from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.home}>
      <section>
        <article>
          <header>
            <h1>Gustavo S. Lima</h1>
          </header>

          <p>
            Desenvolvedor Web Full Stack, apaixonado por tecnologia e
            programação. Atualmente estou focado em desenvolvimento de
            aplicações web com React, NextJS e NodeJS. Pore tenho experiência
            com outras tecnologias como: PHP, Laravel, MySQL entre outras.
          </p>

          <footer>
            <Link href="https://github.com/GustavoSantosLima" target="_blank">
              {Github}
            </Link>
            <Link
              href="https://www.linkedin.com/in/gustavosantoslima"
              target="_blank"
            >
              {LinkedIn}
            </Link>
          </footer>
        </article>
      </section>
    </main>
  );
}