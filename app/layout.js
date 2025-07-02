import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata = {
  title: 'JJ',
  description: 'Your app description here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{  }}>

        <div className="container-fluid">
          
          <div className="container-fluid">
            <Navigation />
          </div>
          
          <main className="flex-grow-1 container-fluid py-4">
            {children}
          </main>

          <div className="container-fluid">
            <Footer />
          </div>

        </div>
      </body>
    </html>
  );
}
