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
    ref.backdrop.classList.remove('is-hidden');
};

function closeModal() {
    ref.backdrop.classList.add('is-hidden');
}

// 2. Закрыть по клику в бекдроп: onBackDropClick ???

// ref.backdrop.addEventListener('click', onBackDropClick);

// function onBackDropClick() {
//     ref.backdrop.classList.add('is-hidden');
// };

// 3. Закрыть по ESC: onEscapeKeypress  Escape
ref.btnCloseRef.addEventListener('keydown', onEscapeKeypress);

function onEscapeKeypress(event) {
    event.key === 'Escape' ? ref.backdrop.classList.add('is-hidden') : null;
};