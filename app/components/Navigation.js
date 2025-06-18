'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className="bg-[#fdf6ec] border-b border-[#e8e1d4] p-4 shadow-sm"
      style={{ fontFamily: "'LMF Itim', cursive" }} // font LMF Itim
    >
      {/* Container flex */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-xl font-bold text-[#3b3b3b]">MyBrand</div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-[#3b3b3b] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
            )}
          </svg>
        </button>

        {/* Menu links */}
        <ul
          className={`
            flex flex-col md:flex-row md:space-x-12
            md:justify-center md:items-center
            absolute md:static top-full left-0 w-full md:w-auto
            bg-[#fdf6ec] md:bg-transparent
            border-t md:border-none border-[#e8e1d4]
            transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden md:overflow-visible'}
          `}
          style={{ fontFamily: "'LMF Itim', cursive" }}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="px-4 py-2 md:p-0">
                <Link
                  href={link.href}
                  className={`group relative block md:inline-block px-2 py-1 transition-all duration-200 ease-in-out
                    ${isActive ? 'text-[#a1866f]' : 'text-[#4b4b4b]'}
                    hover:text-[#a1866f]`}
                  onClick={() => setMenuOpen(false)} // close menu on click link
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#a1866f] transform transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-left
                      ${isActive ? 'scale-x-100' : ''}`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
