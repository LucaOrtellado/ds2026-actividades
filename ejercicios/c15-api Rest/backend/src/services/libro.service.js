const libros = [
  {
    id: 1,
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Ficción",
    descripcion: "Una historia clásica...",
    imagen: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    detalle: "El Principito es una novela publicada en 1943..."
  },
  {
    id: 2,
    titulo: "Indigno de ser humano",
    autor: "Osamu Dazai",
    genero: "Ficción",
    descripcion: "Una novela que explora...",
    imagen: "https://covers.openlibrary.org/b/id/8474077-L.jpg",
    detalle: "Es una de las novelas más importantes de Japón..."
  },
  {
    id: 3,
    titulo: "Mi planta de naranja lima",
    autor: "José Mauro de Vasconcelos",
    genero: "Drama",
    descripcion: "Una obra maestra de la literatura latinoamericana...",
    imagen: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    detalle: "La novela narra la historia de un niño en busca de su identidad..."
  }
]

let proximoId = 4

export function findAll(genero) {
  if (!genero) return libros
  return libros.filter(l => l.genero.toLowerCase() === genero.toLowerCase())
}

export function findById(id) {
  return libros.find(l => l.id === id)
}

export function create(datos) {
  const nuevo = { id: proximoId++, ...datos }
  libros.push(nuevo)
  return nuevo
}

export function update(id, datos) {
  const index = libros.findIndex(l => l.id === id)
  if (index === -1) return undefined
  libros[index] = { ...libros[index], ...datos, id }
  return libros[index]
}

export function remove(id) {
  const index = libros.findIndex(l => l.id === id)
  if (index === -1) return false
  libros.splice(index, 1)
  return true
}