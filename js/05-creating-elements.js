/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Heading';

// document.body.appendChild(titleEl); // быстрый доступ к ел боди, последний ребенок добваь в конец

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imageEl = document.createElement('img');
imageEl.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg');
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 250;

const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl) // вставит соседей всех



/*
 * Создаём и добавляем новый пункт меню
 */

const itemEl = document.createElement('li');
itemEl.classList.add('site-nav__item');
console.log(itemEl);

const linkEl = document.createElement('a');
linkEl.classList.add('site-nav__link');
linkEl.href = '/profile';
linkEl.textContent = 'Личный кабинет';
console.log(linkEl);

itemEl.appendChild(linkEl);

const navEl = document.querySelector('.site-nav');
// navEl.appendChild(itemEl); // вставит последним

navEl.insertBefore(itemEl, navEl.children[0]); // втавит перед

