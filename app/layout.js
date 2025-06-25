import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Geist, Geist_Mono } from 'next/font/google';

import Navigation from './components/Navigation';
import Footer from './components/footer';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'JJ',
  description: 'Your app description here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${geist.className} ${geistMono.className}`}>
        <Navigation />
        <main>{children}fff</main>
        <Footer />
      </body>
    </html>
  );
}
