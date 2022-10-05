
//#region Reyes Magos
const inReyesMagos = document.getElementById("inReyesMagos");
const butReyesMagos = document.getElementById("butReyesMagos");
const outReyesMagos = document.getElementById("outReyesMagos");
const reyesMagos = fecha => {
  const fechaReyes = new Date();
  let tiempo = 0;

  // Asignar el día de reyes.
  fechaReyes.setFullYear(new Date().getFullYear() + 1);
  fechaReyes.setHours(0, 0, 0);
  fechaReyes.setDate(7);
  fechaReyes.setMonth(0);

  // Calcular el nº de días
  tiempo = fechaReyes - fecha;
  return Math.floor(tiempo / (1000 * 60 * 60 * 24));
};

butReyesMagos.onclick = function () {
  const tiempo = reyesMagos(new Date(inReyesMagos.value));
  let message;

  if (tiempo < 0)
    message = "Has viajado en el tiempo y se te han pasado los reyes.";
  else if (tiempo == 0)
    message = "¡Mira debajo de el árbol que han llegado hoy!";
  else
    message = "Faltan " + tiempo + " días para que vengas los reyes.";

  alert(message);
  outReyesMagos.innerHTML = message;
};
//#endregion

//#region Mostrar la fecha
const butDate = document.getElementById("butDate");
const outDate = document.getElementById("outDate");

butDate.onclick = function () {
  const fecha = new Date();
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  let message = `Hoy es ${days[fecha.getDay()]}, ${fecha.getDate()} de ${months[fecha.getMonth()]} de ${fecha.getFullYear()} y son las ${fecha.getHours()}:${fecha.getMinutes()} horas.`

  alert(message);
  outDate.innerHTML = message;
}
//#endregion

//#region Círculo
const inCircle = document.getElementById("inCircle");
const butCircle = document.getElementById("butCircle");
const outCircle = document.getElementById("outCircle");
const calcularAreaCirculo = radio => {
  return Math.round(
    Math.PI * radio * radio * 100 + Number.EPSILON) / 100;
};
const calcularPeriCirculo = radio => {
  return Math.round(
    2 * Math.PI * radio * 100 + Number.EPSILON) / 100;
};

butCircle.onclick = function () {
  const radio = parseInt(inCircle.value);
  const message = `El círculo de ${radio} uds. de radio tiene:
    - un perímetro de ${calcularPeriCirculo(radio)} uds.
    - un área de ${calcularAreaCirculo(radio)} uds.`;
  alert(message);
  outCircle.innerHTML = message.replace(/\n/g, "<br>");
};
//#endregion

//#region Random number
const inRandMin = document.getElementById("inRandMin");
const inRandMax = document.getElementById("inRandMax");
const butRand = document.getElementById("butRand");
const outRand = document.getElementById("outRand");
const calcularAleatorio = (min, max) => {
  if (min > max) { [min, max] = [max, min]; }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

butRand.onclick = function () {
  const n1 = parseInt(inRandMin.value);
  const n2 = parseInt(inRandMax.value);
  const message = calcularAleatorio(n1, n2)
  alert(message);
  outRand.innerHTML = `El número aleatorio es ${message}.`;
};
//#endregion

//#region La Caja
const inCaja = document.getElementById("inCaja");
const expCaja = document.getElementById("expCaja");
const outCaja = document.getElementById("outCaja");
const butCajaMitad = document.getElementById("butCajaMitad");
const butCajaUltimo = document.getElementById("butCajaUltimo");
const butCajaInvertida = document.getElementById("butCajaInvertida");
const butCajaGuiones = document.getElementById("butCajaGuiones");
const butCajaVocales = document.getElementById("butCajaVocales");

butCajaMitad.onclick = function () {
  let message = inCaja.value;
  message = message.slice(0, message.length / 2);
  expCaja.innerHTML = "La mitad del contenido de la caja:";
  outCaja.innerHTML = message;
}

butCajaUltimo.onclick = function () {
  let message = inCaja.value.match(/.$/);
  expCaja.innerHTML = "El último carácter de la caja es:";
  outCaja.innerHTML = message;
}

butCajaInvertida.onclick = function () {
  let message = inCaja.value.split('').reverse().join('');
  expCaja.innerHTML = "El mensaje invertido de la caja es:";
  outCaja.innerHTML = message;
}

butCajaGuiones.onclick = function () {
  let message = inCaja.value.split('').join('-');
  expCaja.innerHTML = "El mensaje invertido de la caja es:";
  outCaja.innerHTML = message;
}

butCajaVocales.onclick = function () {
  let message = inCaja.value.match(/[aeiou]/gi).length;
  expCaja.innerHTML = "El número de vocales contenidas dentro de la caja es:";
  outCaja.innerHTML = message;
}
//#endregion