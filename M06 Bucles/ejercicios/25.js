function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  string = string.toLowerCase().replace(/[^a-z0-9]/g, ""); // Convertir a minúsculas y eliminar caracteres no alfanuméricos

  return string === string.split("").reverse().join("");
}

module.exports = esPalindromo;
