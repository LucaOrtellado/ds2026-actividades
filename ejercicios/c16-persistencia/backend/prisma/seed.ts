import { prisma } from "../src/config/prisma";

const libros = [
  {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    imagen: 'https://via.placeholder.com/150', // Reemplazá por la URL de la imagen si la tenés
    disponible: true,
    precio: 10, 
  },
  {
    titulo: 'Indigno de ser humano',
    autor: 'Osamu Dazai',
    imagen: 'https://via.placeholder.com/150',
    precio: 20,
    disponible: false,
  },
  {
    titulo: 'Mi planta de naranja lima',
    autor: 'José Mauro de Vasconcelos',
    imagen: 'https://via.placeholder.com/150',
    precio: 15,
    disponible: true,
  },
  {
    titulo: 'Holyland',
    autor: 'Kouji Mori',
    imagen: 'https://via.placeholder.com/150',
    precio: 25,
    disponible: true,
  },
  {
    titulo: 'No tengo boca y debo gritar',
    autor: 'Harlan Ellison',
    imagen: 'https://via.placeholder.com/150',
    precio: 20,
    disponible: false,
  },
  {
    titulo: 'Martín Fierro',
    autor: 'José Hernández',
    imagen: 'https://via.placeholder.com/150',
    precio: 15,
    disponible: true,
  },
];

const autores = [
  { id: 1, nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { id: 2, nombre: "Kouji Mori", nacionalidad: "Japones" },
  { id: 3, nombre: "José Hernández", nacionalidad: "Argentina" },
];
async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
}
main();

