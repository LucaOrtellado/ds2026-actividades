import { useEffect } from 'react'
import { Spinner, Alert } from 'react-bootstrap'
import Nav from 'react-bootstrap/esm/Nav'
import { Link } from 'react-router-dom'
import LibroCard from '../components/layout/LibroCard'
import type { LibroCardProps } from '../types/Librocardprops'
import { useFetch } from '../hooks/useFetch'
import { useBusqueda } from '../context/BusquedaContext'

function Catalogo() {
  const { data: libros, loading, error } = useFetch<LibroCardProps[]>('/libros')
  const { filtro } = useBusqueda()

  useEffect(() => {
    if (loading) {
      document.title = 'Cargando catálogo...'
    } else if (error) {
      document.title = 'Error — La Librería'
    } else {
      document.title = `Catálogo (${libros?.length ?? 0} libros) — La Librería`
    }
  }, [loading, error, libros])

  const term = filtro.trim().toLowerCase()
  const librosFiltrados = (libros ?? []).filter(
    (l) => l.titulo.toLowerCase().includes(term) || l.autor.nombre.toLowerCase().includes(term)
  )

  return (
    <>
      <section className="px-4 py-5 text-center bg-dark text-white">
        <div className="py-5">
          <h1 className="display-5 fw-bold">Catálogo</h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Nav.Link as={Link} to="/Home" className="text-info">Inicio</Nav.Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid py-5">
        {loading && (
          <div className="d-flex flex-column align-items-center justify-content-center my-5">
            <Spinner animation="border" variant="light" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <p className="mt-3 text-muted">Cargando libros...</p>
          </div>
        )}

        {error && (
          <div className="container col-md-6 my-4">
            <Alert variant="danger" className="text-center">
              <Alert.Heading>Error al cargar el catálogo</Alert.Heading>
              <p className="mb-0">{error}</p>
            </Alert>
          </div>
        )}

        {!loading && !error && (
          <div className="container py-2">
            <h2 className="mb-4 text-center">Nuestra Selección</h2>
            <p className="text-muted text-center">
              Mostrando {librosFiltrados.length} de {(libros ?? []).length} libros
            </p>
            {librosFiltrados.length === 0 && (
              <Alert variant="secondary" className="text-center">Sin resultados para "{filtro}"</Alert>
            )}
            <div className="row g-4 justify-content-center">
              {librosFiltrados.map((libro) => (
                <LibroCard key={libro.id} {...libro} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Catalogo