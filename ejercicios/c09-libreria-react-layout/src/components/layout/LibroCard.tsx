import { useState } from 'react'
import Nav from 'react-bootstrap/esm/Nav';
import { Link } from 'react-router-dom';

type LibroCardProps = {
  id: number
  titulo: string
  autor: string
  descripcion: string
  imagen: string
}

function LibroCard({ id, titulo, autor, descripcion, imagen }: LibroCardProps) {
  const [esFavorito, setEsFavorito] = useState<boolean>(false)

  return (
    <div className="col">
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{autor}</li>
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