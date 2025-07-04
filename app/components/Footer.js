export default function Footer() {
  return (
    <footer className="py-3 my-4">
      
      <ul className="nav justify-content-center border-bottom pb-3 mb-3" style={{ borderColor: '#d40000' }}>
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-white">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link px-2 text-white">About</a>
        </li>
        <li className="nav-item">
          <a href="/player" className="nav-link px-2 text-white">Driver</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link px-2 text-white">Contact</a>
        </li>
      </ul>

      <p className="text-center text-white">© 2025 Company, Inc</p>
      
    </footer>
  );
}
