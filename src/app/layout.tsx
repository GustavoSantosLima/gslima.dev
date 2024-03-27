import { Orbitron } from "next/font/google";
import Image from "next/image";
import "./globals.css";
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
    <html lang="pt-br">
      <body className={orbitron.className}>
        <header className="gl-header">
          <Image
            width={60}
            height={60}
            src="/gustavo.jpeg"
            alt="Imagem do Gustavo"
          />

          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}
