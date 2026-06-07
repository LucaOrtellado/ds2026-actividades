import { Link } from 'react-router-dom';

import logo from '../../assets/logos-de-libros-1.jpg';
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <img src={logo} alt="Logo" width="40" className="me-2" />
          <span className="me-2" style={{ fontSize: '1.4rem' }}>
            Librería
          </span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/catalogo" >Ver catálogo</Link>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;