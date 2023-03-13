import "@/styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
