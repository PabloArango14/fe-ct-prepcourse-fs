function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    cb(array[index]);
  }
}

module.exports = forEach;
