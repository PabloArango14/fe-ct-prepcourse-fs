function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  return arrayOfStrings.filter(function (elemento) {
    // Comprueba si el primer carácter del elemento es "a"
    return elemento.charAt(0).toLowerCase() === "a";
  });
}

module.exports = filter;
