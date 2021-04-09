/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  clearBtn: document.querySelector('.js-clear'),
  output: document.querySelector('.js-output'),
};

window.addEventListener('keypress', onKeyPress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeyPress(event) {
  console.log(event.code);

  refs.output.textContent += event.key;
}

function onClearOutput(event) {
  refs.output.textContent = '';
}
