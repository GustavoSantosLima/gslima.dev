import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import Navbar from "./navbar";

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

          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}
