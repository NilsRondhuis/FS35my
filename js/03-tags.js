
/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// вариант 1 выбирает по 1 тегу

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onClick);

// function onClick (event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const activeCurrentBtn = document.querySelector('.tags__btn--active'); // поиск по классу

//     if (activeCurrentBtn) {
//         activeCurrentBtn.classList.remove('tags__btn--active');
//     }

//     // activeCurrentBtn?.classList.remove('tags__btn--active'); // если есть, выполни класслист

//     event.target.classList.add('tags__btn--active');
//     selectedTag = event.target.dataset.value;
//     console.log(selectedTag);
// };


// вариант 2 выберет несколько тегов

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onClick);

function onClick (event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }

    event.target.classList.toggle('tags__btn--active');

    console.log(event.target.classList.contains('tags__btn--active'));
    if (event.target.classList.contains('tags__btn--active')) {
        selectedTags.add(event.target.dataset.value);
    } else {
        selectedTags.delete(event.target.dataset.value);
    }

    // event.target.classList.contains('tags__btn--active') ?  // не правильно
    // selectedTags.add(event.target.dataset.value) :
    // selectedTags.delete(event.target.dataset.value);

    console.log(selectedTags);
};