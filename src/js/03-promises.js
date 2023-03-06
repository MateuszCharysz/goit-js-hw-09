'use strict';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
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
log(delay)
log(step)
log(amount)
//CALLBACK/FUNCTIONS
const promiseLoader = () => {
  const iterable = [...Array(amount.value)];
  log(iterable)
  // createPromise()
  //   .then(({ position, delay }) =>
  //     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`),
  //   )
  //   .catch(({ position, delay }) =>
  //     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`),
  //   );
};
// Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

//EVENTS
form.addEventListener('submit', event => {
  event.preventDefault();
  // log(delay.value, step.value, amount.value) // it works
  promiseLoader();
});
