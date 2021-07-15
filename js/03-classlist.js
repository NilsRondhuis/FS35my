const btnRef = document.querySelector('.magic-btn'); 

/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */


// const linkRef = document.querySelector('.site-nav');
// linkRef.classList.add('update-color', '4');
// linkRef.classList.remove('4');

// btnRef.addEventListener('click', () => {
//     linkRef.classList.toggle('update-color');
// });
// // linkRef.classList.replace('site-nav', 'item-nav');
// console.log(linkRef.classList.contains('zhopa'));

const currentLink = '/contact';

btnRef.addEventListener('click', () => {
    const linkRef = document.querySelector(`.site-nav__link[href="${currentLink}"]`);
    linkRef.classList.toggle('orange-link');
});

