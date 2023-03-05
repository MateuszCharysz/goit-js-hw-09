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

//FLATPICKER
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);

//EVENTS
