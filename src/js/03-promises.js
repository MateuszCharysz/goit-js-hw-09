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
  const createPromise = (callId, timeOfLunch) => {
    const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({ position: `${callId}`, time: `${timeOfLunch}` });
        // Fulfill
      } else {
        reject({ orposition: `${callId}`, time: `${timeOfLunch}` }); // Reject
      }
    });
  };
  let arr = [...Array(amount)];
  log(arr);

  arr.forEach((element, index) => {
    let timeOfLunchMath = delay + step * index;
    let promiseId = parseInt(index) + 1;
    setTimeout(
      createPromise(promiseId, timeOfLunchMath)
        .then(value =>
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${value.position} in ${value.time}ms`,
          ),
        )
        .catch(error =>
          Notiflix.Notify.failure(
            `❌ Rejected promise ${error.orposition} in ${error.delay}ms`,
          ),
        ),
      timeOfLunchMath,
    );
  });
};

// const intervalId = setInterval(createPromise(), step);
// setTimeout(intervalId, delay)

// .then((resolve) =>
//   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`),
// )
// .catch((reject) =>
//   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`),
// );

// Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

//EVENTS
form.addEventListener('submit', event => {
  event.preventDefault();
  // log(delay.value, step.value, amount.value) // it works
  // log(typeof delay.value); valueAsNumber
  promiseLoader(delay.valueAsNumber, step.valueAsNumber, amount.valueAsNumber);
});
