import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require("flatpickr/dist/themes/confetti.css");
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { uk } from 'flatpickr/dist/l10n/uk.js';
import { flatpickrOptions } from './04-options';
import { notifyOptions } from './04-options';
import { convertMs } from './05-convert-ms-fn';

const datetimePicker = document.querySelector('input#datetime-picker');
const startTimerBtn = document.querySelector('button[data-start=""]');
const stopTimerAction = document.querySelector('input#datetime-picker');
const span = document.querySelectorAll('span.value');

let timerId = null;

startTimerBtn.setAttribute('disabled', '');

const fr = flatpickr(datetimePicker, flatpickrOptions);

datetimePicker.addEventListener('input', onInputDatetime);
stopTimerAction.addEventListener('click', onClickDatetime);
startTimerBtn.addEventListener('click', startTimerOnBtnClick);

const date = new Date();

function onInputDatetime (e) {
  if (fr.selectedDates[0] > date) {
    startTimerBtn.removeAttribute('disabled');
    startTimerBtn.classList.add("isActive");
  } else {
    Notify.warning('На жаль обрати дату з минулого не можливо!', notifyOptions);
    Notify.failure('Оберіть дату, що має наступити в майбутньому!', notifyOptions);
  }
}

function startTimerOnBtnClick (e) {

  function addLeadingZero (value) {
    return String(value).padStart(2, "0");
  };

 timerId = setInterval(() => {
    const newDate = Date.now();

    const dateCounter = (fr.selectedDates[0] - newDate);

    let timerData = e.target.textContent;

    timerData = convertMs(dateCounter);

    function timer(timerData) {
      span[0].textContent = String(`${timerData.days}`).padStart(3, '0');
      span[1].textContent = addLeadingZero(`${timerData.hours}`);
      span[2].textContent = addLeadingZero(`${timerData.minutes}`);
      span[3].textContent = addLeadingZero(`${timerData.seconds}`);
    }

    timer(timerData);

  },1000);

  startTimerBtn.setAttribute('disabled', '');
  startTimerBtn.classList.remove("isActive");
};

function onClickDatetime (e) {
  clearInterval(timerId);
}