function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  if (typeof letra === "string" && letra.length === 1) {
    const letraMinuscula = letra.toLowerCase();

    if (
      letraMinuscula === "a" ||
      letraMinuscula === "e" ||
      letraMinuscula === "i" ||
      letraMinuscula === "o" ||
      letraMinuscula === "u"
    ) {
      return "Es vocal";
    }
  }

  return "Dato incorrecto";
}

module.exports = esVocal;
