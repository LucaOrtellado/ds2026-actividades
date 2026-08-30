import { Libro } from "../types/libro.types"

const libros: Libro[] = [
  {
    id: 1,
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Ficción",
    precio : 10.99,
    imagen: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    disponible: true,
  },
  {
    id: 2,
    titulo: "Indigno de ser humano",
    autor: "Osamu Dazai",
    genero: "Ficción",
    precio : 12.99,
    imagen: "https://covers.openlibrary.org/b/id/8474077-L.jpg",
    disponible: true,
  },
  {
    id: 3,
    titulo: "Mi planta de naranja lima",
    autor: "José Mauro de Vasconcelos",
    genero: "Drama",
    precio : 15.99,
    imagen: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    disponible: false,
  }
]

let proximoId = 4

export function findAll(genero?: string): Libro[] {
  if (!genero) return libros;
  return libros.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
}

export function findById(id: number): Libro | undefined {
  return libros.find(l => l.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevo: Libro = { id: proximoId++, ...datos };
  libros.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Partial<Omit<Libro, "id">>): Libro | undefined {
  const index = libros.findIndex(l => l.id === id);
  if (index === -1) return undefined;
  libros[index] = { ...libros[index], ...datos, id };
  return libros[index];
}

export function remove(id: number): boolean {
  const index = libros.findIndex(l => l.id === id);
  if (index === -1) return false;
  libros.splice(index, 1);
  return true;
}