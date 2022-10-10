// Circle Functions
function calcularAreaCirculo(radius) {
  return Math.round(
    Math.PI * radius * radius * 100 + Number.EPSILON) / 100;
};
function calcularPeriCirculo(radius) {
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
