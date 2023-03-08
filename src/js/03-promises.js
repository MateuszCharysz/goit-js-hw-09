'use strict';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

//help
const log = console.log;

//DOM
// const delay = document.querySelector('[name="delay"]')
// log(delay)
// const step = document.querySelector('[name="step"]');
// const amount = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');
const {
  elements: { delay, step, amount },
} = form;
log(delay);
log(step);
log(amount);
//CALLBACK/FUNCTIONS

const promiseLoader = (delay, step, amount) => {
  const createPromise = (position, timeOfLunch) => {
    const shouldResolve = Math.random() > 0.3;
    new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({ position: `${position}`, time: `${timeOfLunch}` }); // Fulfill
      } else {
        reject({ position: `${position}`, time: `${timeOfLunch}` }); // Reject
      }
    })
    if (amount===position) clearInterval(intervalId);
  };
  const intervalId = setInterval(createPromise(), step);
  setTimeout(intervalId, delay)



  
  // .then(() =>
  //   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`),
  // )
  // .catch(() =>
  //   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`),
  // );
};
// Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

//EVENTS
form.addEventListener('submit', event => {
  event.preventDefault();
  // log(delay.value, step.value, amount.value) // it works
  // log(typeof delay.value); valueAsNumber
  promiseLoader(delay.valueAsNumber, step.valueAsNumber, amount.valueAsNumber);
});
