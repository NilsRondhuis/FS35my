


/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */


const navEl = document.querySelector('.site-nav');
console.log(navEl);

const navLinkEl = navEl.querySelectorAll('.site-nav__link');
console.log(navLinkEl);