/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((value, name) => {
        console.log('value ---', value);
        console.log('name ---', name);
    })
}