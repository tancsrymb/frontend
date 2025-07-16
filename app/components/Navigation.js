'use client';
import Link from 'next/link';
import Image from 'next/image';

// Constants
const FERRARI_RED = '#d40000';
const FERRARI_RED_HOVER = '#ff4444';
const BLACK = '#000';
const WHITE = '#fff';
const DARK_GRAY = '#333';
const DARKER_GRAY = '#1a1a1a';

// Team data for dropdown
const TEAMS = [
  { name: 'McLaren', path: '/team/mclaren' },
  { name: 'Ferrari', path: '/team/ferrari' },
  { name: 'Mercedes', path: '/team/mercedes' },
  { name: 'Red Bull Racing', path: '/team/redbullracing' },
  { name: 'Williams', path: '/team/williams' },
  { name: 'Racing Bull', path: '/team/racingbull' },
  { name: 'Haas', path: '/team/haas' },
  { name: 'Aston Martin', path: '/team/astonmartin' },
  { name: 'Kick Sauber', path: '/team/kicksauber' },
  { name: 'Alpine', path: '/team/alpine' }
];

// Main navigation items
const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Games', path: 'https://www.formula1.com/en/page/gaming' },
  { name: 'Driver', path: '/player' },
  { name: 'Contact', path: '/contact' }
];

// Styles
const styles = {
  navbar: {
    background: BLACK,
    borderBottom: `4px solid ${FERRARI_RED}`,
    padding: '15px 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  
  brand: {
    color: FERRARI_RED,
    fontSize: '2rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  
  logo: {
    marginRight: '15px'
  },
  
  hamburger: {
    border: `2px solid ${FERRARI_RED}`,
    borderRadius: '5px'
  },
  
  navLink: {
    color: WHITE,
    fontSize: '1.1rem',
    letterSpacing: '1px',
    transition: 'color 0.3s ease',
    fontWeight: 'bold'
  },
  
  dropdown: {
    backgroundColor: DARKER_GRAY,
    border: `2px solid ${FERRARI_RED}`,
    minWidth: '200px'
  },
  
  dropdownItem: {
    color: WHITE,
    fontSize: '0.95rem'
  },
  
  searchInput: {
    backgroundColor: DARK_GRAY,
    color: WHITE,
    border: `2px solid ${FERRARI_RED}`,
    borderRadius: '5px',
    width: '180px'
  },
  
  searchButton: {
    backgroundColor: FERRARI_RED,
    color: WHITE,
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
  },
  
  loginButton: {
    backgroundColor: 'transparent',
    color: FERRARI_RED,
    border: `2px solid ${FERRARI_RED}`,
    borderRadius: '5px',
    fontWeight: 'bold',
    padding: '8px 16px',
    marginLeft: '10px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  }
};

// Component functions
const Logo = () => (
  <Link className="navbar-brand d-flex align-items-center" 
        href="/" 
        style={styles.brand}>
    <Image 
      src="/images/logo/FLOGO.png" 
      alt="Ferrari F1 Logo" 
      width={80} 
      height={40} 
      style={styles.logo} 
    />
  </Link>
);

const HamburgerMenu = () => (
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
    style={styles.hamburger}
  >
    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
  </button>
);

const NavLink = ({ href, children, isExternal = false }) => (
  <li className="nav-item">
    <Link 
      className="nav-link text-uppercase fw-bold mx-3" 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={styles.navLink}
      onMouseEnter={(e) => e.target.style.color = FERRARI_RED}
      onMouseLeave={(e) => e.target.style.color = WHITE}
    >
      {children}
    </Link>
  </li>
);

const TeamsDropdown = () => (
  <li className="nav-item dropdown">
    <a 
      className="nav-link dropdown-toggle text-uppercase fw-bold mx-3" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false" 
      style={styles.navLink}
      onMouseEnter={(e) => e.target.style.color = FERRARI_RED}
      onMouseLeave={(e) => e.target.style.color = WHITE}
    >
      Teams
    </a>
    <ul className="dropdown-menu" style={styles.dropdown}>
      {TEAMS.map((team, index) => (
        <li key={index}>
          <Link 
            className="dropdown-item py-2" 
            href={team.path} 
            style={styles.dropdownItem}
          >
            {team.name}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

const SearchBar = () => (
  <div className="d-flex">
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        style={styles.searchInput}
      />
      <button 
        className="btn px-3" 
        type="submit" 
        style={styles.searchButton}
      >
        GO
      </button>
    </form>
  </div>
);

const LoginButton = () => (
  <Link 
    href="/login" 
    className="text-uppercase"
    style={styles.loginButton}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = FERRARI_RED;
      e.target.style.color = WHITE;
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.color = FERRARI_RED;
      e.target.style.transform = 'scale(1)';
    }}
  >
    Login
  </Link>
);

const CustomStyles = () => (
  <style jsx>{`
    .dropdown-item:hover {
      background-color: ${FERRARI_RED} !important;
      color: ${WHITE} !important;
    }
    
    .navbar-brand:hover {
      color: ${FERRARI_RED_HOVER} !important;
      text-decoration: none;
    }
    
    .btn:hover {
      background-color: ${FERRARI_RED_HOVER} !important;
      transform: scale(1.05);
      transition: all 0.3s ease;
    }
    
    .form-control:focus {
      border-color: ${FERRARI_RED_HOVER};
      box-shadow: 0 0 0 0.2rem rgba(212, 0, 0, 0.25);
    }
    
    @media (max-width: 991px) {
      .navbar-nav {
        text-align: center;
        padding: 20px 0;
      }
      
      .d-flex form {
        margin-top: 15px;
        justify-content: center;
      }
      
      .d-flex {
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
    }
  `}</style>
);

// Main Component
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid px-4">
        
        <Logo />
        <HamburgerMenu />

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            
            {/* Regular navigation items */}
            {NAV_ITEMS.slice(0, 2).map((item, index) => (
              <NavLink key={index} href={item.path}>
                {item.name}
              </NavLink>
            ))}
            
            {/* Games link (external) */}
            <NavLink href={NAV_ITEMS[2].path} isExternal>
              {NAV_ITEMS[2].name}
            </NavLink>
            
            {/* Teams dropdown */}
            <TeamsDropdown />
            
            {/* Remaining navigation items */}
            {NAV_ITEMS.slice(3).map((item, index) => (
              <NavLink key={index + 3} href={item.path}>
                {item.name}
              </NavLink>
            ))}

          </ul>

          <div className="d-flex align-items-center">
            <SearchBar />
            <LoginButton />
          </div>
        </div>
      </div>
      
      <CustomStyles />
    </nav>
  );
}