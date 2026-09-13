import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center mt-5">
      <Link to="/catalogo" className="btn btn-primary me-3">
        Ver Catálogo
      </Link>

      <Link to="/libros/nuevo" className="btn btn-success">
        Agregar Libro
      </Link>
    </div>
  );
}

export default Home;