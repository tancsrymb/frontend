import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ borderRadius: '30px', border: '3px solid #d40000', margin: '10px', backgroundColor: '#000', color: '#fff' }}>
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand fw-bold" href="/" style={{ color: '#d40000', fontSize: '1.5rem' }}>
          <Image src="/images/logo/FLOGO.png" alt="Ferrari F1 Logo" width={100} height={50} />
        </Link>

        

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" href="/" style={{ color: '#fff' }}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/about" style={{ color: '#fff' }}>About</Link>
            </li>

            {/* Teams Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#fff' }}
              >
                Teams
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: '#000', border: '1px solid #d40000', borderRadius: '10px' }}>
                
                <li>
                  <Link className="dropdown-item hover:bg-red-700 text-white transition" href="/">McLaren</Link>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>
                
                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Ferrari</a>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>

                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Mercedes</a>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>

                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Red Bull Racing</a>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>

                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Williams</a>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>

                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Racing Bull</a>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>

                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Haas</a>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>

                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Aston Martin</a>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>

                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Kick Sauber</a>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>

                <li>
                  <a className="dropdown-item hover:bg-red-700 text-white transition" href="/">Alpine</a>
                </li>

              </ul>

              
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact" style={{ color: '#fff' }}>Contact</Link>
            </li>
            {/* Search Bar */}
              <form className="d-flex ms-lg-3 mt-2 mt-lg-0" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #d40000' }}
                />
                <button className="btn" type="submit" style={{ backgroundColor: '#d40000', color: '#fff' }}>
                  Search
                </button>
              </form>

          </ul>
        </div>
      </div>
    </nav>
  );
}
