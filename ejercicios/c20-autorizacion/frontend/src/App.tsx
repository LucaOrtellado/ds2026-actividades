import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.tsx';
import Home from './pages/home';
import Catalogo from './pages/catalogo';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/libroNuevo.tsx';
import Login from './pages/login';
import { BusquedaProvider } from './context/BusquedaContext';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BusquedaProvider>
        <Layout>
          <Routes>
            <Route element={<PrivateRoute rol="ADMIN" />}></Route>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/libros/:id" element={<LibroDetalle />} />
            <Route path="/libros/nuevo" element={<LibroNuevo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BusquedaProvider>
    </AuthProvider>
  );
}

export default App;