export default function Footer() {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top text-white">
        {/* โลโก้และลิขสิทธิ์ */}
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
            <svg className="bi me-2" width={40} height={32} aria-hidden="true">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <p className="text-white">© 2025</p>
        </div>
        {/* ช่องว่าง */}
        <div className="col mb-3" />
        
        {/* เมนู Section 2 */}
        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Home</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Features</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">About</a>
            </li>
          </ul>
        </div>
        {/* เมนู Section 3 */}
        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Home</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Features</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">About</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
