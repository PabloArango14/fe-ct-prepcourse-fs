function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  var argumentosPasados = [];

  for (let index = 0; index < array.length; index++) {
    var resultado = cb(array[index]);
    argumentosPasados.push(resultado);
  }

  return argumentosPasados;
}

module.exports = map;
