import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ borderRadius: '10px', border: '3px solid #d40000', marginTop: '10px', backgroundColor: '#000', color: '#fff' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/" style={{ color: '#d40000', fontSize: '1.5rem' }}>
          <Image src="/images/logo/FLOGO.png" alt="Ferrari F1 Logo"  width={100} height={50} />
        </Link>
        
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/" style={{ color: '#fff' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about" style={{ color: '#fff' }}>About</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#fff' }}
              >
                Products & Sponsers
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: '#000', border: '1px solid #d40000' }}>
                <li>
                  <Link className="dropdown-item" href="/products" style={{ color: '#fff' }}>Product List</Link>
                </li>
                <li><hr className="dropdown-divider" style={{ borderTop: '1px solid #d40000' }} /></li>
                <li>
                  <a className="dropdown-item" href="/sponsers" style={{ color: '#fff' }}>Sponsers</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact" style={{ color: '#fff' }}>Contact</Link>
            </li>
          </ul>

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
        </div>
      </div>
    </nav>
  );
}
