import { Link, useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import { useBusqueda } from '../../context/BusquedaContext';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logos-de-libros-1.jpg';

function Header() {
  const { filtro, setFiltro } = useBusqueda();
  const { usuario, logout, tieneRol } = useAuth();
  const navigate = useNavigate();

  const buscar = (e: FormEvent) => {
    e.preventDefault();
    navigate('/catalogo');
  };

  const manejarSesion = () => {
    if (usuario) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

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
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Ver catálogo</Link>
            </li>
            {tieneRol('ADMIN') && (
              <li className="nav-item">
                <Link className="nav-link" to="/libros/nuevo">Nuevo libro</Link>
              </li>
            )}
          </ul>

          <form onSubmit={buscar} className="d-flex me-lg-3" style={{ maxWidth: '18rem' }}>
            <input
              type="search"
              className="form-control"
              placeholder="Buscar por título o autor…"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
            <button className="btn btn-outline-light ms-2" type="submit" aria-label="Buscar">
              🔍
            </button>
          </form>

          {usuario && (
            <span className="text-white me-lg-3 mt-2 mt-lg-0">Hola, {usuario.nombre}</span>
          )}

          <button className="btn btn-outline-light mt-2 mt-lg-0" onClick={manejarSesion}>
            {usuario ? 'Salir' : 'Ingresar'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;