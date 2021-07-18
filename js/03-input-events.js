/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

// refs.inputEl.addEventListener('focus', onInputFocus);
// refs.inputEl.addEventListener('blur', onInputBlur);
// refs.inputEl.addEventListener('change', onInputChange);
// refs.inputEl.addEventListener('input', onInputChange);


// const inputEl = document.querySelector('.js-input');
// const checkboxEl = document.querySelector('.js-license');
// const btnSubmitEl = document.querySelector('.js-button');
// const btnNameLabel = document.querySelector('.js-button > span');

const refs = {
    inputEl: document.querySelector('.js-input'),
    checkboxEl: document.querySelector('.js-license'),
    btnSubmitEl: document.querySelector('.js-button'),
    btnNameLabel: document.querySelector('.js-button > span'),
};

refs.inputEl.addEventListener('input', onInputChange);
refs.checkboxEl.addEventListener('change', onLicenseChange);

function onInputFocus() {
    console.log('Инпут получил событие фокус - ivent focus');
}

function onInputBlur() {
    console.log('Инпут потерял фокус - ivent blur');
}

function onInputChange(event) {   // на инпутах использоватся не будет
    console.log(event.currentTarget.value);
    refs.btnNameLabel.textContent = event.currentTarget.value;
} 

function onLicenseChange(event) {
    console.log(event.currentTarget.checked);
    console.log('refs.btnSubmitEl.disabled ---', refs.btnSubmitEl.disabled);
    refs.btnSubmitEl.disabled = !event.currentTarget.checked;  // кнопка выключена когда не чекед
};

// refs.checkboxEl.addEventListener('change', enabledBtn);

// function enabledBtn(event) {
//     event.currentTarget.checked ? refs.btnSubmitEl.removeAttribute('disabled') : refs.btnSubmitEl.setAttribute('disabled', 'true');
// };

// то же самое

