function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  return texto.split("").reverse().join("");
}

const resultadoFuncion = invertirTexto("Hola mundo");

console.log(resultadoFuncion);

module.exports = invertirTexto;
