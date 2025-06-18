import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg">
      <ul className="flex space-x-8 justify-center items-center text-white font-semibold text-lg">
        <li>
          <Link
            href="/"
            className="relative px-3 py-2 transition duration-300 ease-in-out hover:text-yellow-300 hover:scale-105"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="relative px-3 py-2 transition duration-300 ease-in-out hover:text-yellow-300 hover:scale-105"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="relative px-3 py-2 transition duration-300 ease-in-out hover:text-yellow-300 hover:scale-105"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="relative px-3 py-2 transition duration-300 ease-in-out hover:text-yellow-300 hover:scale-105"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
