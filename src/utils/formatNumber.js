export function formatAsARS(price) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)
}
