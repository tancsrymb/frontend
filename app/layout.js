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
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ 
        backgroundColor: '#000000',
        fontFamily: 'Kanit, sans-serif' // เพิ่มฟอนต์ที่นี่
      }}> 
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
