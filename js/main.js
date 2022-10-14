
//#region Reyes Magos
const inReyesMagos = document.getElementById("inReyesMagos");
const butReyesMagos = document.getElementById("butReyesMagos");
const outReyesMagos = document.getElementById("outReyesMagos");

butReyesMagos.onclick = function () {
  const tiempo = reyesMagos(new Date(inReyesMagos.value));
  let message;

  if (isNaN(tiempo)) {
    message = "¡Introduce una fecha!";
  }
  else if (tiempo == 0)
    message = "¡Mira debajo de el árbol que han llegado hoy!";
  else
    message = "Faltan " + tiempo + " días para que vengas los reyes.";

  outReyesMagos.innerHTML = message;
};
//#endregion

//#region Mostrar la fecha
const butDate = document.getElementById("butDate");
const outDate = document.getElementById("outDate");

butDate.onclick = function () {
  let message = parseDate(new Date());
  outDate.innerHTML = message;
}
//#endregion

//#region Círculo
const inCircle = document.getElementById("inCircle");
const butCircle = document.getElementById("butCircle");
const outCircle = document.getElementById("outCircle");

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

butRand.onclick = function () {
  const n1 = parseInt(inRandMin.value);
  const n2 = parseInt(inRandMax.value);
  const message = calcularAleatorio(n1, n2)
  outRand.innerHTML = message;
};
//#endregion

//#region La Caja
// References to DOM elements
const inCaja = document.getElementById("inCaja");
const expCaja = document.getElementById("expCaja");
const outCaja = document.getElementById("outCaja");
const butCajaMitad = document.getElementById("butCajaMitad");
const butCajaUltimo = document.getElementById("butCajaUltimo");
const butCajaInvertida = document.getElementById("butCajaInvertida");
const butCajaGuiones = document.getElementById("butCajaGuiones");
const butCajaVocales = document.getElementById("butCajaVocales");

// On click events
butCajaMitad.onclick = function () {
  let message = mitadCar(inCaja.value);
  expCaja.innerHTML = "La mitad del contenido de la caja:";
  outCaja.innerHTML = message;
}

butCajaUltimo.onclick = function () {
  let message = ultimoCaracter(inCaja.value);
  expCaja.innerHTML = "El último carácter de la caja es:";
  outCaja.innerHTML = message;
}

butCajaInvertida.onclick = function () {
  let message = cadenaInversa(inCaja.value);
  expCaja.innerHTML = "El mensaje invertido de la caja es:";
  outCaja.innerHTML = message;
}

butCajaGuiones.onclick = function () {
  let message = cadenaGuiones(inCaja.value);
  expCaja.innerHTML = "El mensaje invertido de la caja es:";
  outCaja.innerHTML = message;
}

butCajaVocales.onclick = function () {
  let message = contarVocales(inCaja.value);
  expCaja.innerHTML = "El número de vocales contenidas dentro de la caja es:";
  outCaja.innerHTML = message;
}
//#endregion