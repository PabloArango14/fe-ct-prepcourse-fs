function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  if (fecha instanceof Date) {
    // Verifica si el objeto de fecha es válido
    return !isNaN(fecha.getTime()) && fecha.toString() !== "Invalid Date";
  }
  // Expresión regular para el formato AAAA-MM-DD o AAAA/MM/DD
  const formatoDate = /^\d{4}[-/]\d{2}[-/]\d{2}$/;
  //Verifica si la fecha es un string y cumple con el formato
  if (typeof fecha === "string" && !formatoDate.test(fecha)) {
    // Intenta crear un objeto de fecha
    var miObjeto = new Date(fecha);
    // Verifica si el objeto de fecha es válido y no es "Invalid Date"
    return !isNaN(miObjeto.getTime()) && miObjeto.toString() !== "Invalid Date";
  }
  return false;
}

module.exports = esFechaValida;
