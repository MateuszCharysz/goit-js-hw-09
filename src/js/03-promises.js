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
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    let onResolve = { position: `${position}`, stepTime: `${delay}` }; // Fulfill
  } else {
    let onReject = { position: `${position}`, stepTime: `${delay}` }; // Reject
  }
}

const promiseLoader = (delay, step, amount) => {
  let iterator = [...Array(amount)];
  iterator.forEach()

  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(()=>{setInterval((createPromise()),step, delay,amount)},delay, step, amount)
  // })
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
  log(typeof delay.value);
  promiseLoader(delay.value, step.value, amount.value);
});
