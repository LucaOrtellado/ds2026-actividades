import { Navigate } from 'react-router-dom';
import type { ReactElement } from 'react';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  children: ReactElement;
  roles?: Array<'ADMIN' | 'CLIENTE'>;
}

export default function PrivateRoute({ children, roles }: PrivateRouteProps) {
  const { estaAutenticado, usuario } = useAuth();

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />;
  }

  if (roles && roles.length > 0) {
    if (!usuario || !roles.includes(usuario.rol)) {
      return <Navigate to="/sin-permiso" replace />;
    }
  }

  return children;
}
