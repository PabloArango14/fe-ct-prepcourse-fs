/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  return Object.entries(objeto).map(([clave, valor]) => [clave, valor]);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const countObj = {};

  // Recorre cada caracter del string
  for (let char of string) {
    // Verifica si el caracter ya existe en el objeto
    if (countObj[char]) {
      // Si existe, incrementa la cuenta
      countObj[char]++;
    } else {
      // Si no existe, inicializa la cuenta en 1
      countObj[char] = 1;
    }
  }

  // Ordena las claves alfabéticamente
  const sortedKeys = Object.keys(countObj).sort();

  // Crea un nuevo objeto ordenado
  const sortedCountObj = {};
  for (let key of sortedKeys) {
    sortedCountObj[key] = countObj[key];
  }

  return sortedCountObj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  const uppercaseLetters = string.replace(/[^A-Z]/g, "");
  const lowercaseLetters = string.replace(/[^a-z]/g, "");

  // Concatena las letras mayúsculas al principio y las minúsculas al final
  const resultString = uppercaseLetters + lowercaseLetters;

  return resultString;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  const palabras = frase.split(" ");

  // Invierte cada palabra y las concatena en un nuevo array
  const palabrasInvertidas = palabras.map((palabra) =>
    palabra.split("").reverse().join("")
  );

  // Une las palabras invertidas en un nuevo string
  const resultado = palabrasInvertidas.join(" ");

  return resultado;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  const numeroStr = numero.toString();

  // Invierte la cadena
  const numeroInvertido = numeroStr.split("").reverse().join("");

  // Compara la cadena original con la invertida
  if (numeroStr === numeroInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  const resultado = string.replace(/[abc]/g, "");

  return resultado;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  const resultado = arrayOfStrings.sort((a, b) => a.length - b.length);

  return resultado;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  const interseccion = array1.filter((element) => array2.includes(element));

  return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
