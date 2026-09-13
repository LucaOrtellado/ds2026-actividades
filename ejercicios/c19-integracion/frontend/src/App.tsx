import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from './components/layout/layout.tsx';
import Home from './pages/home';
import Catalogo from './pages/catalogo'; // Tu CatalogoPage adaptado
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/libroNuevo.tsx';
import { useFetch } from './hooks/useFetch'; // Importamos tu hook

import type { LibroCardProps } from './types/Librocardprops.ts';

function App() {
  const [libros, setLibros] = useState<LibroCardProps[]>([]);

  const { data: librosMock, loading, error } = useFetch<LibroCardProps[]>('/libros.json');

  useEffect(() => {
    if (librosMock) {
      setLibros(librosMock);
    }
  }, [librosMock]);

  const agregarLibro = (nuevo: LibroCardProps) => {
    setLibros([...libros, nuevo]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />

        <Route
          path="/catalogo"
          element={
            <Catalogo 
              libros={libros} 
              loading={loading} 
              error={error} 
            />
          }
        />

        <Route path="/libros/:id" element={<LibroDetalle />} />

        <Route
          path="/libros/nuevo"
          element={<LibroNuevo onAgregar={agregarLibro} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;