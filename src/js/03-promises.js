import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './04-options';

const form = document.querySelector('form');
const inputDelay = document.querySelector("input[name='delay']");
const inputStep = document.querySelector("input[name='step']");
const inputAmount = document.querySelector("input[name='amount']");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  let delay = Number(inputDelay.value);
  let step = Number(inputStep.value);
  const amount = Number(inputAmount.value);

  for (let i = 1; i <= amount; i++) {
    let position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(
          `Fulfilled promise ${position} in ${delay}ms`,
          notifyOptions
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `Rejected promise ${position} in ${delay}ms`,
          notifyOptions
        );
      });

    delay += step;
  }
});
