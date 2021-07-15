/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const btnRef = document.querySelector('.magic-btn');
// btnRef.addEventListener('click', () => {
//     const imageRef = document.querySelector('.hero__image');
//     imageRef.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
//     imageRef.alt = 'Меняется картинка';
// });

const imageRef = document.querySelector('.hero__image');
imageRef.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';

const heroTitleEl = document.querySelector('.hero__title');


/* 
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageRef.getAttribute('src')); // получить
// console.log(imageRef.setAttribute('heigth', '200')); //установить
// console.log(imageRef.removeAttribute('heigth')); // удалить
// console.log(imageRef.hasAttribute('height')); // наличие true/false


/*
 * Data-атрибуты
 */
const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[0].dataset.action);

const input = document.querySelector('.js-input');

// const btnRef = document.querySelector('.magic-btn');
// btnRef.addEventListener('click', () => {
//     const input = document.querySelector('.js-input');
//     input.value = 'Name Surname';
// })
