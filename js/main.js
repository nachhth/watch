/**
 * Crea un reloj que se actualice en tiempo real:
 *
 *  - La hora debe ir en el <h1>
 *  - La fecha debe ir en el <h2>
 *
 * En función de la hora del día la imagen de fondo debe cambiar.
 * Para este punto puedes ayudarte de las clases:
 *
 *  - morning: a partir de las 7:00.
 *
 *  - afternoon: a partir de las 13:00.
 *
 *  - night: a partir de las 21:00.
 *
 */
'use strict';

import { formatNum } from './helpers.js';

function getCurrentTime() {
  const currentTime = new Date();

  // OTRA MANERA VALIDA PERO ME DEVUELVE UN STRING
  // const options_B = {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  // };
  // const formatTime = currentTime.toLocaleTimeString('es-ES', options_B);
  // return formatTime;

  const hour = formatNum(currentTime.getHours());
  const minute = formatNum(currentTime.getMinutes());
  const second = formatNum(currentTime.getSeconds());

  // console.log(`${hour}:${minute}:${second}`);

  let time = { hour, minute, second };

  // console.log(time.hour);

  return time;
}

function getCurrentDate() {
  const currentDate = new Date();
  // console.log(currentDate);

  const options = {
    year: 'numeric', // Año en número.
    month: 'long', // Mes en letra.
    day: 'numeric', // Día del mes en número.
  };

  return currentDate.toLocaleDateString('es-ES', options);
}

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const body = document.querySelector('body');

setInterval(() => {
  h1.innerHTML = `${getCurrentTime().hour}:${getCurrentTime().minute}:${getCurrentTime().second}`;
  h2.innerHTML = getCurrentDate();

  body.classList.add('night');

  if (getCurrentTime().hour >= 7) {
    body.classList.replace('night', 'morning');
  }
  if (getCurrentTime().hour >= 13) {
    body.classList.replace('morning', 'afternoon');
  }
  if (getCurrentTime().hour >= 21) {
    body.classList.replace('afternoon', 'night');
  }
}, 1000);
