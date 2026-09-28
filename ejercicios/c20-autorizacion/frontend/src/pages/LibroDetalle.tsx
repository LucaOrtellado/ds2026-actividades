import { useParams } from 'react-router-dom';
import { libros } from '../components/libros';

function LibroDetalle() {
  const { id } = useParams();

  const libro = libros.find(
    libro => libro.id === Number(id)
  );

  if (!libro) {
    return <h1>Libro no encontrado</h1>;
  }

  return (
    <div className="container py-4">
      <h1>{libro.titulo}</h1>

      <img
        src={libro.imagen}
        alt={libro.titulo}
        width={250}
      />

      <h3>{libro.autor}</h3>

      <p>{libro.descripcion}</p>
      <p>${libro.precio.toFixed(2)}</p>
      <p>{libro.disponible ? 'Disponible' : 'No disponible'}</p>
    </div>
  );
}

export default LibroDetalle;