import { Link } from 'react-router-dom';
import { Alert, Button, Container } from 'react-bootstrap';

export default function SinPermiso() {
  return (
    <Container className="py-5 text-center" style={{ maxWidth: 500 }}>
      <Alert variant="warning" className="shadow-sm p-4">
        <h2 className="mb-3">🚫 Acceso Denegado</h2>
        <p className="lead mb-4">
          No tenés los permisos requeridos para acceder a esta sección. Esta funcionalidad está reservada para administradores.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button as={Link as any} to="/catalogo" variant="primary">
            Ir al Catálogo
          </Button>
          <Button as={Link as any} to="/" variant="outline-secondary">
            Inicio
          </Button>
        </div>
      </Alert>
    </Container>
  );
}
