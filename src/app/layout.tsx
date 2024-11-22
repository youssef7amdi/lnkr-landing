import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundImage from '@/components/BackgroundImage';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lnkr',
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
          inter.className +
          ' relative grid h-[100dvh] grid-rows-[80px_1fr_80px]'
        }
      >
        <Header />
        <BackgroundImage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
