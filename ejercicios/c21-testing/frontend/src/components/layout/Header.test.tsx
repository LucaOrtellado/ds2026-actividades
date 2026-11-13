import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { AuthContext, type AuthContextType } from '../../context/AuthContext';
import { BusquedaProvider } from '../../context/BusquedaContext';
import type { Usuario, Rol } from '../../types/sesionType';

function renderHeader(usuario: Usuario | null) {
  const auth: AuthContextType = {
    usuario,
    cargando: false,
    estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol,
    login: vi.fn(),
    logout: vi.fn(),
  };

  return render(
    <MemoryRouter>
      <BusquedaProvider>
        <AuthContext.Provider value={auth}>
          <Header />
        </AuthContext.Provider>
      </BusquedaProvider>
    </MemoryRouter>
  );
}

describe('Header según el rol', () => {
  it('CLIENTE: saluda por nombre y NO ve "Nuevo libro"', () => {
    renderHeader({ id: 2, email: 'cliente@libreria.test', nombre: 'Cliente', rol: 'CLIENTE' });
    expect(screen.getByText('Hola, Cliente')).toBeInTheDocument();
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
  });

  it('ADMIN: ve el link "Nuevo libro"', () => {
    renderHeader({ id: 1, email: 'admin@libreria.test', nombre: 'Admin', rol: 'ADMIN' });
    expect(screen.getByText('Hola, Admin')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Nuevo libro' })).toBeInTheDocument();
  });

  it('Sin sesión: no ve saludo y el botón dice "Ingresar"', () => {
    renderHeader(null);
    expect(screen.queryByText(/Hola,/)).not.toBeInTheDocument();
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ingresar' })).toBeInTheDocument();
  });
});
