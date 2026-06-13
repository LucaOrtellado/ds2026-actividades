import LibroCard from '../components/layout/LibroCard';
import type {LibroCardProps}  from '../types/Librocardprops';

import Nav from 'react-bootstrap/esm/Nav';
import { Link } from 'react-router-dom';


interface Props {
  libros: LibroCardProps[];
}
function Catalogo ({ libros }: Props) {
  return (
    <>
      <section className="px-4 py-5 text-center bg-dark">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Catalogo</h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Nav.Link as={Link} to="/Home" >Inicio</Nav.Link>              
            </div>
          </div>
        </div>
      </section>
          <div className="container-fluid py-4">
      <div className="row g-4 justify-content-center">


    {libros.map((libro) => (
      <LibroCard
        key={libro.id}
        {...libro}
      />
    ))}
  </div>
</div>
    </>
  )
}
export default Catalogo