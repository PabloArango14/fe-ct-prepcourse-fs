function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  let suma = 0;

  // Iterar sobre el array y sumar los elementos
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    suma += arrayOfNumbers[i];
  }

  // Pasar el resultado al callback
  cb(suma);
}

module.exports = sumarArray;
