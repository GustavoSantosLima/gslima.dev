import Timeline from "@/components/Timeline";
import Link from "next/link";
import { Github, LinkedIn } from "../helpers/Icons";

export default function Home() {
  return (
    <main className="gl-home">
      <section>
        <article>
          <header>
            <h1>Gustavo S. Lima</h1>
          </header>

          <p>
            Sou um profissional que atual na função de Desenvolvedor Web desde
            2015 com habilidades sólidas na implementação de interfaces e
            sistemas. Trabalhei com diversas tecnologias como PHP (Laravel e
            CodeIgniter), JavaScript (React, Next, Vue, AngularJS, Jquery), CSS
            (BootsTrap, Material UI, TailWind), TypeScript, HTML, SQL Server,
            MySQL, MongoDB, Regis, Git/GitHub, Docker, entre outras.
          </p>
          <p>
            Tenho boa comunicação e capacidade de se adaptar a diferentes
            ambientes e demandas tecnológicas.
          </p>
          <p>
            Além disso, acredito que um trabalho bem-sucedido depende da
            colaboração em equipe, e sempre busco uma boa comunicação (clara e
            objetiva) com meus colegas de trabalho.
          </p>

          <section className="px-4 py-6 my-12">
            <h2 className="text-lg font-bold text-center mb-4">
              Experiência Profissional
            </h2>

            <div className="flex flex-col gap-2">
              <Timeline
                title="Luiz Leonardos & Advogados"
                startDate="Dezembro de 2022"
                role="Desenvolvedor Front End"
                description="Desenvolvimento de layouts para sistemas internos integração com API, manutenção de sistemas legados, entre outras atividades."
                technologies={[
                  "HTML",
                  "CSS (Bootstrap, TailWind)",
                  "JavaScript (React, Next, AngularJS)",
                  "PHP (CodeIgniter e Laravel)",
                  "TypeScript",
                  "SQL Server",
                  "Git/GitHub"
                ]}
              />

              <Timeline
                title="Capped Out Media"
                startDate="Junho de 2023"
                endDate="Agosto de 2023"
                role="Desenvolvedor Front End"
                description="Trabalhei no desenvolvimento do fontend, de uma aplicação web para aluguel de estações de carregamente de carros elétricos, utilizando React e Next e integranção com API desenvolvida em PHP"
                technologies={[
                  "HTML",
                  "CSS (TailWind)",
                  "Styled-components",
                  "JavaScript (React, Next)",
                  "TypeScript",
                  "Git/GitHub",
                  "Autenticacão Social (Google, Facebook)"
                ]}
              />

              <Timeline
                title="Atitude Mídia Digital"
                startDate="Setembro de 2015"
                endDate="Novembro de 2022"
                role="Desenvolvedor Web Full Stack"
                description="Trabalhei ativamente no desenvolvimento de sites e sistemas internos, criação de player em tempo real usando protocolo WebRTC, contrução de API's, integração de sistemas, entre outras atividades."
                technologies={[
                  "HTML",
                  "CSS (Bootstrap, Material UI, TailWind)",
                  "JavaScript (React, Vue, AngularJS)",
                  "PHP (CodeIgniter e Laravel)",
                  "TypeScript",
                  "SQL Server",
                  "MySQL",
                  "MongoDB",
                  "Redis",
                  "Git/GitHub",
                  "Docker",
                  "Socket.io e Pusher"
                ]}
              />
            </div>
          </section>

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
