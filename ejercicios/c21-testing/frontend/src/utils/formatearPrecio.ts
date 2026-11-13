export function formatearPrecio(precio: number): string {
  return `$${precio.toLocaleString("es-AR")}`;
}
