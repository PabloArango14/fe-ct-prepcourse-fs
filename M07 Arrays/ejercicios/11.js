function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let resultados = [];

  for (let index = 0; index < array.length; index++) {
    let resultado = array[index] * index;
    resultados.push(resultado);
  }

  return resultados;
}

module.exports = multiplicarElementosPorIndice;
