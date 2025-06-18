import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex space-x-6 justify-center text-white font-medium">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About Us</Link>
        </li>
        <li>
          <Link href="/products" className="hover:underline">Products</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
