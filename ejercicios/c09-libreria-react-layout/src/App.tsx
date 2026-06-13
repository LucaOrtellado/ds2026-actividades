import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.tsx';
import Home from './pages/home';
import Catalogo from './pages/catalogo';
import LibroDetalle from './pages/LibroDetalle';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
      </Routes>
    </Layout>
  );
}

export default App;