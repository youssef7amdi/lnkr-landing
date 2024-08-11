import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lnkr Technologies Company',
  description:
    'We are company that simply help Medical service providers optimize their Processes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + ' grid h-[100dvh] grid-rows-[80px_1fr_80px]'
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
