'use strict';
//import
//help
const log = console.log;

//DOM
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.body;

//CALLBACK// FUNCTIONS
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const onClickStart = () => {
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled'), '';
  timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
};

const onClickStop = () => {
  btnStop.setAttribute('disabled', '');
  btnStart.removeAttribute('disabled', '');
  clearInterval(timerId);
};

//EVENTS
btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);
