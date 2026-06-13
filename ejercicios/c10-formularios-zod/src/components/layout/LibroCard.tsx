import { useState } from 'react'
import Nav from 'react-bootstrap/esm/Nav';
import { Link } from 'react-router-dom';
import type { LibroCardProps } from '../../types/Librocardprops';


function LibroCard({ id, titulo, autor, descripcion, precio, imagen, disponible }: LibroCardProps) {
  const [esFavorito, setEsFavorito] = useState<boolean>(false)

  return (
    <div className="col">
      <div className="card h-100">
        {imagen ? (
        <img src={imagen} className="card-img-top" alt={titulo} />
        ) : (
        <div className="card-img-top text-center p-5 bg-light">
          Sin imagen
        </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{autor}</li>
          <li className="list-group-item">${precio.toFixed(2)}</li>
          <li className="list-group-item">{disponible ? 'Disponible' : 'No disponible'}</li>
        </ul>
        <div className="card-body d-flex justify-content-between">
          <Nav.Link as={Link} to={`/libros/${id}`} >Ver más</Nav.Link>
          <button 
            className="btn btn-outline-warning btn-sm" 
            onClick={() => setEsFavorito(!esFavorito)}
            >
            {esFavorito ? '⭐ Quitar de Favoritos' : '☆ Agregar a Favoritos'}

          </button>
        </div>
      </div>
    </div>
  )
}

export default LibroCard;