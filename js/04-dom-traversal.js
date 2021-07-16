/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

const navEl = document.querySelector('.site-nav');

console.log(navEl.parentNode); // выбырет родителя
console.log(navEl.childNodes); // все дочерние ел и текст
console.log(navEl.children); // только дочерние ел, можно выбрать через []
console.log(navEl.firstElementChild);
console.log(navEl.lastElementChild);
console.log(navEl.previousElementSibling); // выберет соседа слева
console.log(navEl.nextElementSibling); // выберет соседа справа