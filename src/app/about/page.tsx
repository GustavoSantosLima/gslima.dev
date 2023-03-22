import { Github, LinkedIn } from "@/helpers/Icons";
import styles from "@/styles/about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <main className={styles.home}>
      <section>
        <article>
          <header>
            <h1>Gustavo S. Lima</h1>
          </header>

          <p>
            Meu nome é Gustavo e sou um desenvolvedor web com sete anos de
            experiência profissional. Durante minha carreira, trabalhei com
            várias tecnologias como PHP usando Laravel e CodeIgniter, JavaScript
            usando React, Vue, AngularJS (até Jquery já usei rs) e CSS usando
            BootsTrap, Material UI, TailWind e etc.
          </p>
          <p>
            Além disso, acredito que um trabalho bem-sucedido depende da
            colaboração em equipe, e sempre busco estabelecer uma comunicação
            clara e objetiva com meus colegas de trabalho.
          </p>
          <p>
            Em resumo, sou um desenvolvedor comprometido com a qualidade e
            atualização constante de habilidades e conhecimentos técnicos.
            Trabalho bem em equipe e busco sempre entregar soluções de alta
            qualidade para meus clientes.
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
