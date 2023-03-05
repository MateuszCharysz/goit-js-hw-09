'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

//help
const log = console.log;

//DOM
const timer = document.querySelector('.timer');
const btnStart = document.querySelector('[data-start]');
const daysDisplay = document.querySelector('[data-days]');
const hoursDisplay = document.querySelector('[data-hours]');
const minDisplay = document.querySelector('[data-minutes]');
const secDisplay = document.querySelector('[data-seconds]');
const fields = document.querySelectorAll('.field');
const labels = document.querySelectorAll('.label');
log(fields);
//CSS styling
timer.style.cssText = `display: flex; font-size: 40px; gap: 10px;`;
fields.forEach(
  element =>
    (element.style.cssText = `display: flex; flex-direction: column; align-items: center;`),
);
labels.forEach(element => (element.style.fontSize = '12px'));
btnStart.setAttribute('disabled', '');
//CALLBACK/FUNCTIONS
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  } else {
    return value;
  }
};
const startCountdown = () => {
  let timerId = setInterval(() => {
    let counter = pickedTime - new Date().getTime();
    if (counter == 0) clearInterval(timerId);
    let conversion = convertMs(counter);
    log(conversion);
    daysDisplay.innerHTML = addLeadingZero(conversion.days);
    hoursDisplay.innerHTML = addLeadingZero(conversion.hours);
    minDisplay.innerHTML = addLeadingZero(conversion.minutes);
    secDisplay.innerHTML = addLeadingZero(conversion.seconds);
    if (Object.values(conversion) === [0, 0, 0, 0])
      //   secDisplay.innerHTML === '00' &&
      //   minDisplay.innerHTML === '00' &&
      //   hoursDisplay.innerHTML === '00' &&
      //   daysDisplay.innerHTML === '00'
      // )
      clearInterval(timerId);
  }, 1000);
};
//FLATPICKER
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let pickedTimeTransfer = selectedDates[0].getTime();
    let presentTimeTransfer = new Date().getTime();
    if (pickedTimeTransfer > presentTimeTransfer) {
      btnStart.removeAttribute('disabled');
      pickedTime = pickedTimeTransfer;
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};

let pickedTime = 0;

flatpickr('#datetime-picker', options);

//EVENTS
btnStart.addEventListener('click', startCountdown);

//BUGS to polish//
// to use padStart()
