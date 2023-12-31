import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './04-options';

const form = document.querySelector('form');

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
    form.reset();
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  let delay = Number(form.elements.delay.value);
  let step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

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
