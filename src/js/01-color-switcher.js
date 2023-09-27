const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start="start"]');
const stopBtn = document.querySelector('button[data-stop="stop"]');

let timerId = null;

startBtn.addEventListener('click', onStartBtnAction);
stopBtn.addEventListener('click', onStopBtnFreeze);

// default availability state for button 'Stop'
stopBtn.setAttribute('disabled', '');
stopBtn.classList.add('isActive');

function onStartBtnAction(e) {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  if (timerId !== null) {
    e.target.setAttribute('disabled', '');
    e.target.classList.add('isActive');

    stopBtn.removeAttribute('disabled');
    stopBtn.classList.remove('isActive');
  }
}

function onStopBtnFreeze(e) {
  clearInterval(timerId);

  e.target.setAttribute('disabled', '');
  e.target.classList.add('isActive');

  body.style.removeProperty('background-color');

  startBtn.removeAttribute('disabled');
  startBtn.classList.remove('isActive');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
