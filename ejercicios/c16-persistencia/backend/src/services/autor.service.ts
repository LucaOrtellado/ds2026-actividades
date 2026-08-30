import { Autor } from "../types/autor.types"

const autores: Autor[] = [
  { 
    id: 1, 
    nombre: "Antoine de Saint-Exupéry", 
    nacionalidad: "Francés", 
    biografia: "Aviador y escritor francés, reconocido mundialmente por ser el autor del clásico El Principito." 
  },
  { 
    id: 2, 
    nombre: "Osamu Dazai", 
    nacionalidad: "Japonés", 
    biografia: "Destacado novelista japonés de la posguerra, célebre por obras como Indigno de ser humano." 
  },
  { 
    id: 3, 
    nombre: "José Mauro de Vasconcelos", 
    nacionalidad: "Brasileño", 
    biografia: "Escritor y periodista brasileño, autor de la aclamada obra Mi planta de naranja lima." 
  }
]

let proximoId = 4

export function findAll(nacionalidad?: string): Autor[] {
  if (!nacionalidad) return autores;
  return autores.filter(a => a.nacionalidad.toLowerCase() === nacionalidad.toLowerCase());
}

export function findById(id: number): Autor | undefined {
  return autores.find(a => a.id === id);
}

export function create(datos: Omit<Autor, "id">): Autor {
  const nuevo: Autor = { id: proximoId++, ...datos };
  autores.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Partial<Omit<Autor, "id">>): Autor | undefined {
  const index = autores.findIndex(a => a.id === id);
  if (index === -1) return undefined;

  const autorActualizado: Autor = { ...autores[index], ...datos, id };
  autores[index] = autorActualizado;
  
  return autorActualizado;
}

export function remove(id: number): boolean {
  const index = autores.findIndex(a => a.id === id);
  if (index === -1) return false;
  autores.splice(index, 1);
  return true;
}