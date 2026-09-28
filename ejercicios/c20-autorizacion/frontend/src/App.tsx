import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.tsx';
import Home from './pages/home';
import Catalogo from './pages/catalogo';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/libroNuevo.tsx';
import Login from './pages/login';
import { BusquedaProvider } from './context/BusquedaContext';

function App() {
  return (
    <BusquedaProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/libros/:id" element={<LibroDetalle />} />
          <Route path="/libros/nuevo" element={<LibroNuevo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BusquedaProvider>
  );
}

export default App;