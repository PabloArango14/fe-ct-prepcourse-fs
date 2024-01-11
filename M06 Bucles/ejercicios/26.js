function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, ""); // Convertir a minúsculas y eliminar caracteres no alfabéticos
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  // Si las longitudes son diferentes, no pueden ser anagramas
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Ordenar las letras y comparar si son iguales
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

module.exports = esAnagrama;
