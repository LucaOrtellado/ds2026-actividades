import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.tsx';
import Home from './pages/home';
import Catalogo from './pages/catalogo';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/libroNuevo.tsx';
import { libros as librosIniciales } from './components/libros';import { useState } from 'react';
import type { LibroCardProps } from './types/Librocardprops.ts';
function App() {
  const [libros, setLibros] = useState<LibroCardProps[]>(librosIniciales);

  const agregarLibro = (nuevo: LibroCardProps) => {
    setLibros([...libros, nuevo]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/catalogo"
          element={<Catalogo libros={libros} />}
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