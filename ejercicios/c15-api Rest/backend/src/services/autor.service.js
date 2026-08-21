const autores = [
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

export function findAll(nacionalidad) {
  if (!nacionalidad) return autores
  return autores.filter(a => a.nacionalidad.toLowerCase() === nacionalidad.toLowerCase())
}

export function findById(id) {
  return autores.find(a => a.id === id)
}

export function create(datos) {
  const nuevo = { id: proximoId++, ...datos }
  autores.push(nuevo)
  return nuevo
}

export function update(id, datos) {
  const index = autores.findIndex(a => a.id === id)
  if (index === -1) return undefined
  autores[index] = { ...autores[index], ...datos, id }
  return autores[index]
}

export function remove(id) {
  const index = autores.findIndex(a => a.id === id)
  if (index === -1) return false
  autores.splice(index, 1)
  return true
}