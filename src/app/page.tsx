import { Github, LinkedIn } from "@/helpers/Icons";
import styles from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.home}>
      <section>
        <article>
          <header>
            <h1>Meu Blog Pessoal</h1>
          </header>

          <p>
            Aqui vou escrever sobre coisas que eu acho interessante no mundo da
            programação. como este blog ainda está em desenvolvimento, não tem
            muita coisa aqui ainda, mas em breve terá. 😜
          </p>
        </article>
      </section>
    </main>
  );
}
