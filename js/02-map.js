/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubleNumbers = numbers.map(numbers => numbers * 2);

// console.log(doubleNumbers);


  
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

// const updatePoint = players.map(player => {
//     const a = player.points / 100 * 10;
//     return player.points = player.points + a;
// });

// вар2
const updatePoint = players.map(player => {
    return {
        ...player,
        points: Math.round(player.points * 1.1),   //подмена свойства
        timePlayed: player.timePlayed * 2,
    }
})

console.table(players)
console.log(updatePoint);

  /*
   * Получаем массив имён всех игроков
   */

// const playersName = players.map(player => player.name);
// console.log(playersName);

