import { Github, LinkedIn } from "../helpers/Icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="gl-home">
      <section>
        <article>
          <header>
            <h1>Gustavo S. Lima</h1>
          </header>

          <p>
            Sou desenvolvedor web desde 2015. Durante minha carreira, trabalhei
            com várias tecnologias como PHP usando Laravel e CodeIgniter,
            JavaScript usando React, Vue, AngularJS (até Jquery já usei rs) e
            CSS usando BootsTrap, Material UI, TailWind e etc.
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

          <div id="contact">
            <header>
              <h2>Contatos</h2>
            </header>

            <footer>
              <Link target="_blank" href="https://github.com/GustavoSantosLima">
                {Github}
                <span>GitHub</span>
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/in/gustavosantoslima"
              >
                {LinkedIn}
                <span>LinkedIn</span>
              </Link>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}
