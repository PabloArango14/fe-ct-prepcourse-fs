function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  let sumaNotas = 0;

  for (let index = 0; index < resultadosTest.length; index++) {
    sumaNotas += resultadosTest[index];
  }

  return sumaNotas / resultadosTest.length;
}

module.exports = promedioResultadosTest;
