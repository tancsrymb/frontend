'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

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
      <ul className="flex space-x-12 justify-center items-center text-[#3b3b3b] font-medium text-lg">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative px-2 py-1 transition-all duration-200 ease-in-out
                  ${isActive ? 'text-[#a1866f]' : 'text-[#4b4b4b]'}
                  hover:text-[#a1866f]`}
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
    </nav>
  );
}
