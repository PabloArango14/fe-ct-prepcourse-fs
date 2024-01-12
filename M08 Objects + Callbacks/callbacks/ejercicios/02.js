function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  if (typeof callback === "function") {
    // Aplica la función de callback al string y devuelve el resultado.
    // La función de callback se encargará de recibir el string y devolverlo con los cambios.
    return callback(string);
  } else {
    // Si no se proporciona una función de callback, devuelve el string original.
    return string;
  }
}

module.exports = cambiarCadena;
