import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Geist, Geist_Mono } from 'next/font/google';

import Navigation from './components/Navigation';


export const metadata = {
  title: 'JJ',
  description: 'Your app description here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>

      </body>
    </html>
  );
}
