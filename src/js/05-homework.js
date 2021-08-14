import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

const STORAGE_KEY = 'form-data';
const formData = {};
const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
    input: document.querySelector('.js-feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);
populateTextarea()
/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение полей 
 * - Сохраняем его в хранилище formData
 * - Можно добавить throttle
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

/*
* - Получаем значение из хранилища
* - Если там что-то было, обновляем DOM
*/
function populateTextarea() {
    const value = localStorage.getItem(STORAGE_KEY);
    const obj = JSON.parse(value);

    if (value) {
        refs.input.value = obj.name;
        refs.textarea.value = obj.message;
    }
}