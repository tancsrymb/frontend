'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

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
    <nav className={`${prompt.className} bg-[#fdf6ec] border-b border-[#e8e1d4] p-4 shadow-sm`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Hamburger */}
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
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Menu */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col absolute top-[64px] left-0 w-full bg-[#fdf6ec] border-t border-[#e8e1d4] md:static md:flex md:flex-row md:items-center md:space-x-12 md:bg-transparent md:border-none`}
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
                  onClick={() => setMenuOpen(false)}
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
