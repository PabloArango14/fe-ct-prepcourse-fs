function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:

  return Number.isInteger(numero);
}

console.log(esNumeroEntero(8));
console.log(esNumeroEntero(8.8));

module.exports = esNumeroEntero;
