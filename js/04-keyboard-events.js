/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const ref = {
    clearBtn: document.querySelector('.js-clear'),
    output: document.querySelector('.js-output'),
};

window.addEventListener('keydown', keyPress);
ref.clearBtn.addEventListener('click', onClearOutput);

function keyPress(event) {
    ref.output.textContent += event.key;
}

function onClearOutput() {
    ref.output.textContent = '';
} 