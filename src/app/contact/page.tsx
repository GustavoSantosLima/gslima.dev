import { Github, LinkedIn } from "@/helpers/Icons";
import styles from "@/styles/contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <main className={styles.home}>
      <section>
        <article>
          <header>
            <h1>Contatos</h1>
          </header>

          <footer>
            <Link href="https://github.com/GustavoSantosLima" target="_blank">
              {Github}
              <span>GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/gustavosantoslima"
              target="_blank"
            >
              {LinkedIn}
              <span>LinkedIn</span>
            </Link>
          </footer>
        </article>
      </section>
    </main>
  );
}
