function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var tabla = [];
  for (i = 1; i < 11; i++) {
    tabla.push(6 * i);
  }
  return tabla;
}

module.exports = tablaDelSeis;
