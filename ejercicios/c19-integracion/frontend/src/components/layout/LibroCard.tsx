import { useState } from 'react'
import Nav from 'react-bootstrap/esm/Nav';
import { Link } from 'react-router-dom';
import type { LibroCardProps } from '../../types/Librocardprops';

function LibroCard({ id, titulo, autor, descripcion, precio, imagen, disponible }: LibroCardProps) {
  const [esFavorito, setEsFavorito] = useState<boolean>(false)

  return (
    // Agregamos clases de tamaño específicas (col-12 col-sm-6 col-md-4 col-lg-3) para que Bootstrap arme bien las columnas
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 bg-secondary text-white"> {/* Le ponemos un fondo gris provisional para asegurar que se vea */}
        <img 
          src={imagen} 
          className="card-img-top" 
          alt={titulo} 
          style={{ height: '250px', objectFit: 'cover' }} // Asegura que la imagen tenga dimensiones fijas visibles
        />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text text-truncate">{descripcion}</p> {/* text-truncate evita que desborde */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-secondary text-white">{autor}</li>
          {/* Agregamos una validación por si precio viene undefined temporalmente */}
          <li className="list-group-item bg-secondary text-white">
            ${precio !== undefined && precio !== null ? precio.toFixed(2) : '0.00'}
          </li>
          <li className="list-group-item bg-secondary text-white">{disponible ? 'Disponible' : 'No disponible'}</li>
        </ul>
        <div className="card-body d-flex justify-content-between align-items-center">
          <Nav.Link as={Link} to={`/libros/${id}`} className="text-info font-weight-bold">Ver más</Nav.Link>
          <button 
            className="btn btn-outline-warning btn-sm" 
            onClick={() => setEsFavorito(!esFavorito)}
          >
            {esFavorito ? '⭐ Quitar' : '☆ Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LibroCard;