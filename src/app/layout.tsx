import './globals.css';
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: 'Анвіт Транс',
  description: 'Компанія "Анвіт Транс"',
};

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
