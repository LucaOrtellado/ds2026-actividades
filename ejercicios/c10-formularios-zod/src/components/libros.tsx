import libro1 from '../assets/9788419087492.jpg';
import libro2 from '../assets/indigno-de-ser-humano.jpg';
import libro3 from '../assets/91.jpg';
import libro4 from '../assets/71j9nz-qdwL._AC_UF1000,1000_QL80_.jpg';
import libro5 from '../assets/26371909.jpg';
import libro6 from '../assets/EDCI-769789871518937.jpg';


export const libros = [
  {
    id: 1,
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    descripcion: 'Una historia clásica...',
    imagen: libro1,
    disponible: true,
    precio: 9.99,
  },
  {
    id: 2,
    titulo: 'Indigno de ser humano',
    autor: 'Osamu Dazai',
    descripcion: 'Una novela que explora...',
    imagen: libro2,
    precio: 19.99,
    disponible: false,
  },
  {
    id: 3,
    titulo: 'Mi planta de naranja lima',
    autor: 'José Mauro de Vasconcelos',
    descripcion: 'Una obra maestra de la literatura latinoamericana...',
    imagen: libro3,
    precio: 14.99,
    disponible: true,
  },
  {
    id: 4,
    titulo: 'Holyland',
    autor: 'Kouji Mori',
    descripcion: 'Un thriller psicológico que explora temas de identidad y pertenencia...',
    imagen: libro4,
    precio: 24.99,
    disponible: true,
  },
  {
    id: 5,
    titulo: 'No tengo boca y debo gritar',
    autor: 'Harlan Ellison',
    descripcion: 'Una colección de relatos que desafían las normas...',
    imagen: libro5,
    precio: 19.99,
    disponible: false
  },
  {
    id: 6,
    titulo: 'Martín Fierro',
    autor: 'José Hernández',
    descripcion: 'La épica obra literaria argentina...',
    imagen: libro6,
    precio: 14.99,
    disponible: true
  }
];