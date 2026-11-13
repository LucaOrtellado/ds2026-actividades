import { useParams, Link } from 'react-router-dom';
import { Spinner, Alert, Button } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import type { LibroCardProps } from '../types/Librocardprops';

function LibroDetalle() {
  const { id } = useParams();
  const { data: libro, loading, error } = useFetch<LibroCardProps>(`/libros/${id}`);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  if (error || !libro) {
    return (
      <div className="container py-5 text-center">
        <Alert variant="danger">
          <h3>Libro no encontrado</h3>
          <p>{error ?? 'No se pudo cargar la información del libro solicitado.'}</p>
        </Alert>
        <Button as={Link as any} to="/catalogo" variant="primary">
          Volver al catálogo
        </Button>
      </div>
    );
  }

  const nombreAutor = typeof libro.autor === 'object' && libro.autor !== null 
    ? libro.autor.nombre 
    : (libro.autor ?? 'Autor desconocido');

  return (
    <div className="container py-4">
      <Link to="/catalogo" className="btn btn-outline-secondary mb-3">
        ← Volver al catálogo
      </Link>
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <img
            src={libro.imagen || 'https://via.placeholder.com/250x350?text=Sin+Portada'}
            alt={libro.titulo}
            className="img-fluid rounded shadow"
            style={{ maxHeight: 380, objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <h1 className="fw-bold">{libro.titulo}</h1>
          <h4 className="text-muted mb-3">{nombreAutor}</h4>
          <p className="fs-4 fw-semibold text-primary">${Number(libro.precio).toFixed(2)}</p>
          <p>
            <span className={`badge ${libro.disponible ? 'bg-success' : 'bg-secondary'}`}>
              {libro.disponible ? 'Disponible' : 'No disponible'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LibroDetalle;
