function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
  }

  // Paso 2: Encuentra el valor mínimo y máximo
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);

  // Paso 3: Itera para encontrar el número faltante
  for (let i = min; i <= max; i++) {
    if (!numeros.includes(i)) {
      return i; // El primer número faltante encontrado
    }
  }

  // Devuelve null si no se encuentra ningún número faltante
  return null;
}

module.exports = encontrarNumeroFaltante;
