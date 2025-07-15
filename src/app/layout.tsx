import './styles/globals.scss';

export const metadata = {
  title: 'Catálogo',
  description: 'Sistema de livros e jogos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
