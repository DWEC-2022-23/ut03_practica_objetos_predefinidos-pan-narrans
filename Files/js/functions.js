// Mage Kings
function reyesMagos(fecha) {
  const fechaConverted = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
  const fechaReyes = new Date(fecha.getFullYear(), 0, 6, 0, 0, 0);
  let tiempo = 0;


  console.log(fecha, fechaConverted)
  // Ajustar el año de la fecha de Reyes con año de la fecha introducida.
  tiempo = fechaReyes - fechaConverted;
  tiempo = tiempo < 0
    ? fechaReyes.setFullYear(fechaReyes.getFullYear() + 1) - fechaConverted
    : tiempo;

  // Calcular el nº de días.
  return Math.floor(tiempo / (1000 * 60 * 60 * 24));
};

// Parse Date
function parseDate(date) {
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  let str = `Hoy es ${days[date.getDay()]},`
  str += ` ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
  str += ` y son las ${String(date.getHours()).padStart(2, '0')}`;
  str += `:${String(date.getMinutes()).padStart(2, '0')} horas.`

  return str;
}

// Circle Functions
function calcularAreaCirculo(radius) {
  if (radius < 0)
    return NaN;
  else
    return Math.round(
      Math.PI * radius * radius * 100 + Number.EPSILON) / 100;
};
function calcularPeriCirculo(radius) {
  if (radius < 0)
    return NaN;
  else
    return Math.round(
      2 * Math.PI * radius * 100 + Number.EPSILON) / 100;
};

// Random Number
function calcularAleatorio(min, max) {
  if (min > max) { [min, max] = [max, min]; }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// String Functions
function mitadCar(str) { return str.slice(0, str.length / 2); };
function ultimoCaracter(str) { return str.match(/.$/)[0]; };
function cadenaInversa(str) { return str.split('').reverse().join(''); };
function cadenaGuiones(str) { return str.split('').join('-') };
function contarVocales(str) { return (str.match(/[aeiou]/gi) || []).length };