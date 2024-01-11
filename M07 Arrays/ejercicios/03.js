function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  if (!array.includes(elemento)) {
    return -1;
  } else {
    return array.indexOf(elemento);
  }
}

// function encontrarElemento(elemento, array) {
//   return array.indexOf(elemento);
// }

module.exports = encontrarElemento;
