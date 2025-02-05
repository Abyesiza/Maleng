import './globals.css';
import type { Metadata } from 'next';
import { 
  Fredoka,
  Comic_Neue,
  Quicksand
} from 'next/font/google';
import Link from 'next/link';
import BackgroundPattern from './components/BackgroundPattern';
import SocialMediaIcons from './components/SocialMediaIcons';
import Layout from './components/Layout';

const fredoka = Fredoka({ 
  subsets: ['latin'],
  display: 'swap',
});

const quicksand = Quicksand({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

const comicNeue = Comic_Neue({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comic',
});

export const metadata: Metadata = {
  title: 'Maleng Primary School',
  description: 'Nurturing young minds for a brighter future',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${quicksand.variable} ${comicNeue.variable}`}>
      <body className={`${fredoka.className} min-h-screen ${comicNeue.variable} font-sans antialiased`}>
        <Layout>
          <BackgroundPattern />
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
}