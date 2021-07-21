/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const ref = {
    btnOpenRef: document.querySelector('.button'),
    btnCloseRef: document.querySelector('.close-btn'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
};

// 1. Открыть и закрыть по кнопке
ref.btnOpenRef.addEventListener('click', openModal);
ref.btnCloseRef.addEventListener('click', closeModal);

function openModal() {
    window.addEventListener('keydown', onEscKeyPress);  // закрыть с еск
    ref.backdrop.classList.remove('is-hidden');
};

function closeModal() {
    window.removeEventListener('keydown', onEscKeyPress);  // закрыть с еск
    ref.backdrop.classList.add('is-hidden');
}

// 2. Закрыть по клику в бекдроп: onBackDropClick ???

ref.backdrop.addEventListener('click', onBackDropClick);

function onBackDropClick(event) {
    event.target.classList.add('is-hidden');
};

// 3. Закрыть по ESC: onEscapeKeypress  Escape
function onEscKeyPress(event) {
    console.log(event);
    event.code === 'Escape' ? ref.backdrop.classList.add('is-hidden') : null;
};