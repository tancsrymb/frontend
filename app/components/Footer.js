export default function Footer() {
  return (
    <footer className="py-4 mt-5 border-top bg-light w-100">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
        
        <div className="d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" aria-label="Bootstrap">
            <svg className="bi" width={30} height={24} aria-hidden="true">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2025 JJ Company</span>
        </div>

        <ul className="nav justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.instagram.com/f1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram fs-4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.facebook.com/Formula1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook fs-4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://twitter.com/F1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter fs-4"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
