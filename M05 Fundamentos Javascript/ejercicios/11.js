function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  const fechaNacimientoObjeto = new Date(fechaNacimiento);
  const fechaActual = new Date();

  const edad = fechaActual.getFullYear() - fechaNacimientoObjeto.getFullYear();

  if (edad > 18) {
    return true; // La persona es mayor de 18 años
  } else if (edad === 18) {
    // Si la persona tiene exactamente 18 años, verificamos si ya ha cumplido años en el año actual
    return (
      fechaActual.getMonth() > fechaNacimientoObjeto.getMonth() ||
      (fechaActual.getMonth() === fechaNacimientoObjeto.getMonth() &&
        fechaActual.getDate() >= fechaNacimientoObjeto.getDate())
    );
  } else {
    return false; // La persona es menor de 18 años
  }
}

module.exports = esMayorDeEdad;
