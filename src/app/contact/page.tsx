import { Github, LinkedIn } from "@/helpers/Icons";
import styles from "@/styles/home.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <main className={styles.home}>
      <section>
        <article>
          <header>
            <h1>Contact Page</h1>
          </header>

          <p>Em Desenvolvimento...</p>

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
