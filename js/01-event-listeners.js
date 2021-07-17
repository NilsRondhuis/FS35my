/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent === handle TargetBtnRef(Subject) Click (Event)
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */


const targetBtnRef = document.querySelector('.js-target-btn');
const addLisBtnRef = document.querySelector('.js-add-listener');
const removeLisBtnRef = document.querySelector('.js-remove-listener');

// targetBtnRef.addEventListener('click', () => {
//     console.log('Click');
// })

addLisBtnRef.addEventListener('click', () => {
    console.log('Повесил слушателя');

    targetBtnRef.addEventListener('click', onTargetBtnClick);
    return targetBtnRef;
});

removeLisBtnRef.addEventListener('click', () => {
    console.log('Delete listener btn');

    targetBtnRef.removeEventListener('click', onTargetBtnClick);
});

const onTargetBtnClick = () => {
    console.log('Мне добавили слушателя');
}