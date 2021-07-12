/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */


/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// const numbers = [1, 9, 6, 2, 3];

// numbers.sort((currentEl, nextEl) => currentEl - nextEl);
// console.log(numbers);

// const copy = [...numbers].sort((a, b) => b - a);
// console.log(copy);



/*
 * Кастомная сортировка сложных типов
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени

// const bestPlayers = [...players].sort((a, b) => b.timePlayed - a.timePlayed);
// console.log(bestPlayers);

// По имени 

const namePlayer = [...players].sort((a, b) => b.name[0] > a.name[0] ? -1 : 1);
console.table(namePlayer);


