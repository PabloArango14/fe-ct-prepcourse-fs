function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  const set = new Set();

  for (let i = 0; i < numeros.length; i++) {
    if (set.has(numeros[i])) {
      return numeros[i]; // Encuentra el primer elemento repetido
    } else {
      set.add(numeros[i]); // Agrega el elemento al conjunto
    }
  }

  return undefined;
}

module.exports = encontrarElementoRepetido;
