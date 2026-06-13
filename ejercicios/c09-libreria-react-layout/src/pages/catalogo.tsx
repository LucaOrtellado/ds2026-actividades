import LibroCard from '../components/layout/LibroCard.tsx';

import libro1 from '../assets/9788419087492.jpg';
import libro2 from '../assets/indigno-de-ser-humano.jpg';
import libro3 from '../assets/91.jpg';
import libro4 from '../assets/71j9nz-qdwL._AC_UF1000,1000_QL80_.jpg';
import libro5 from '../assets/26371909.jpg';
import libro6 from '../assets/EDCI-769789871518937.jpg';

import Nav from 'react-bootstrap/esm/Nav';
import { Link } from 'react-router-dom';

function Catalogo () {
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

        <LibroCard 
            id={1}
          titulo="El Principito" 
          autor="Antoine de Saint-Exupéry" 
          descripcion="Una historia clásica sobre un pequeño príncipe que viaja por diferentes planetas." 
          imagen={libro1} 
        />

        <LibroCard 
            id={2}
          titulo="Indigno de ser humano" 
          autor="Osamu Dazai" 
          descripcion="Una novela que explora la condición humana y la alienación en la sociedad moderna." 
          imagen={libro2} 
        />

        <LibroCard 
            id={3}
          titulo="Mi planta de naranja lima" 
          autor="José Mauro de Vasconcelos" 
          descripcion="Una obra maestra de la literatura latinoamericana que narra la historia de un niño en busca de su identidad." 
          imagen={libro3} 
        />

        <LibroCard 
            id={4}
          titulo="Holyland" 
          autor="Kouji Mori" 
          descripcion="Un thriller psicológico que explora temas de identidad y pertenencia en un entorno post-apocalíptico." 
          imagen={libro4} 
        />

        <LibroCard 
            id={5}
          titulo="No tengo boca y debo gritar" 
          autor="Harlan Ellison" 
          descripcion="Una colección de relatos que desafían las normas y exploran lo inquietante del ser humano." 
          imagen={libro5} 
        />

        <LibroCard 
            id={6}  
          titulo="Martín Fierro" 
          autor="José Hernández" 
          descripcion="La épica obra literaria argentina que narra la vida del gaucho Martín Fierro." 
          imagen={libro6} 
        />

      </div>
    </div>
    </>
  );
}

export default Catalogo