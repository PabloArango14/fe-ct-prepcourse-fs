function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  // Verifica si el array está vacío
  if (array.length === 0) {
    return undefined; // Devuelve undefined si el array está vacío
  }

  // Genera un índice aleatorio usando Math.random()
  const indiceAleatorio = Math.floor(Math.random() * array.length);

  // Devuelve el elemento correspondiente al índice aleatorio
  return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
