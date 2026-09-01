import { prisma } from "../src/config/prisma";

const categorias = [
  { nombre: "Novela" },
  { nombre: "Manga" },
  { nombre: "Ciencia Ficción" },
];

const autores = [
  { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { nombre: "Kouji Mori", nacionalidad: "Japones" },
  { nombre: "José Hernández", nacionalidad: "Argentina" },
  { nombre: "José Mauro de Vasconcelos", nacionalidad: "Brasil" },
  { nombre: "Harlan Ellison", nacionalidad: "Estados Unidos" },
  { nombre: "Osamu Dazai", nacionalidad: "Japones" },
];

const libros = [
  {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    imagen: 'https://via.placeholder.com/150',
    disponible: true,
    precio: 10,
    cats: ['Novela'],                              
  },
  {
    titulo: 'Indigno de ser humano',
    autor: 'Osamu Dazai',
    imagen: 'https://via.placeholder.com/150',
    precio: 20,
    disponible: false,
    cats: ['Novela'],                            
  },
  {
    titulo: 'Mi planta de naranja lima',
    autor: 'José Mauro de Vasconcelos',
    imagen: 'https://via.placeholder.com/150',
    precio: 15,
    disponible: true,
    cats: ['Novela'],                            
  },
  {
    titulo: 'Holyland',
    autor: 'Kouji Mori',
    imagen: 'https://via.placeholder.com/150',
    precio: 25,
    disponible: true,
    cats: ['Manga'],                              
  },
  {
    titulo: 'No tengo boca y debo gritar',
    autor: 'Harlan Ellison',
    imagen: 'https://via.placeholder.com/150',
    precio: 20,
    disponible: false,
    cats: ['Ciencia Ficción'],                  
  },
  {
    titulo: 'Martín Fierro',
    autor: 'José Hernández',
    imagen: 'https://via.placeholder.com/150',
    precio: 15,
    disponible: true,
    cats: ['Novela'],                              
  },
];

async function main() {
  await prisma.autor.createMany({ data: autores });
  await prisma.categoria.createMany({ data: categorias });
  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({ data: {
      ...datos,
      autor:      { connect: { nombre: autor } },        
      categorias: { connect: cats.map(nombre => ({ nombre })) },
    } });
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });