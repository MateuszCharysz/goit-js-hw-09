'use strict';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

//help
const log = console.log;

//DOM
const form = document.querySelector('.form');
const {
  elements: { delay, step, amount },
} = form;
//CALLBACK/FUNCTIONS

const promiseLoader = (delay, step, amount) => {
  const createPromise = (callId, timeOfLunch) => {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({ position: `${callId}`, time: `${timeOfLunch}` });
      } else {
        reject({ errorPosition: `${callId}`, time: `${timeOfLunch}` });
      }

    });
  };

  let arr = [...Array(amount)];
  log(arr);

  arr.forEach((element, index) => {
    let timeOfLunchMath = delay + step * index;
    let promiseId = parseInt(index) + 1;
    setTimeout(() => {
      createPromise(promiseId, timeOfLunchMath)
        .then(value =>
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${value.position} in ${value.time}ms`,
          ),
        )
        .catch(error =>
          Notiflix.Notify.failure(
            `❌ Rejected promise ${error.errorposition} in ${error.delay}ms`,
          ),
        );
    }, timeOfLunchMath);
  });
};


//EVENTS
form.addEventListener('submit', event => {
  event.preventDefault();
  promiseLoader(delay.valueAsNumber, step.valueAsNumber, amount.valueAsNumber);
});
