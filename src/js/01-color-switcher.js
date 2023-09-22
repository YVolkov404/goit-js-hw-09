const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start="start"]');
const stopBtn = document.querySelector('button[data-stop="stop"]');

let timerId = null;

startBtn.addEventListener('click', onStartBtnAction);
stopBtn.addEventListener('click', onStopBtnFreeze);

// default availability state for button 'Stop'
stopBtn.setAttribute('disabled', '');

function onStartBtnAction(e) {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  if (timerId !== null) {
    e.target.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
  }
}

function onStopBtnFreeze(e) {
  clearInterval(timerId);
  e.target.setAttribute('disabled', '');
  body.style.removeProperty('background-color');
  startBtn.removeAttribute('disabled');
  // test(e);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function test(e) {
//   if (e.target.hasAttribute('disabled')) {
//     e.target.setAttribute('disabled', '');
//   } else {
//     e.target.removeAttribute('disabled');
//   }
// }
