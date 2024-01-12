function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let sumaTotal = 0;

  for (let index = 0; index < arrayOfNums.length; index++) {
    sumaTotal += arrayOfNums[index];
  }

  return sumaTotal;
}

module.exports = agregarNumeros;
