function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  const arrayMayusculas = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      arrayMayusculas.push(array[i].toUpperCase());
    } else {
      arrayMayusculas.push(array[i]); // Mantén elementos no string sin cambios
    }
  }

  return arrayMayusculas;
}

module.exports = convertirStringAMayusculas;
