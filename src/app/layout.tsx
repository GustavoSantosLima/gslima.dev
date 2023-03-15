import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import styles from "@/styles/layout.module.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Gustavo S. Lima",
  description: "Site pessoal do Gustavo S. Lima"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={orbitron.className}>
        <header>
          <Image
            src="/gustavo.jpeg"
            alt="Imagem do Gustavo"
            width={60}
            height={60}
          />

          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">Sobre</Link>
              </li>
              <li>
                <Link href="/contact">Contato</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
