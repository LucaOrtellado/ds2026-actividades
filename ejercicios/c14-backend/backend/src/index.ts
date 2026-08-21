import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const libros = [
  {
    id: 1,
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    descripcion: 'Una historia clásica...',
    imagen: '/assets/9788419087492.jpg',
    disponible: true,
    precio: 9.99,
  },
  {
    id: 2,
    titulo: 'Indigno de ser humano',
    autor: 'Osamu Dazai',
    descripcion: 'Una novela que explora...',
    imagen: '/assets/indigno-de-ser-humano.jpg',
    precio: 19.99,
    disponible: false,
  },
  {
    id: 3,
    titulo: 'Mi planta de naranja lima',
    autor: 'José Mauro de Vasconcelos',
    descripcion: 'Una obra maestra de la literatura latinoamericana...',
    imagen: '/assets/91.jpg',
    precio: 14.99,
    disponible: true,
  },
  {
    id: 4,
    titulo: 'Holyland',
    autor: 'Kouji Mori',
    descripcion: 'Un thriller psicológico que explora temas de identidad y pertenencia...',
    imagen: '/assets/71j9nz-qdwL._AC_UF1000,1000_QL80_.jpg',
    precio: 24.99,
    disponible: true,
  },
  {
    id: 5,
    titulo: 'No tengo boca y debo gritar',
    autor: 'Harlan Ellison',
    descripcion: 'Una colección de relatos que desafían las normas...',
    imagen: '/assets/26371909.jpg',
    precio: 19.99,
    disponible: false,
  },
  {
    id: 6,
    titulo: 'Martín Fierro',
    autor: 'José Hernández',
    descripcion: 'La épica obra literaria argentina...',
    imagen: '/assets/EDCI-769789871518937.jpg',
    precio: 14.99,
    disponible: true,
  },
]

app.get('/', (_req, res) => {
  res.json({
    message: 'API de La Librería funcionando'
  })
})

app.get('/libros', (_req, res) => {
  res.json(libros)
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})