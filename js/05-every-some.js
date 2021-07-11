// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// const timePlayed = players.every(player => player.timePlayed > 100);
// console.log(timePlayed);


/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

// const isAllOnline = players.some(player => player.online);
// console.log(isAllOnline);


const players = [
    { name: 'Sergio Ramos', team: 'PSG' },
    { name: 'Romero Lucacu', team: 'Inter'},
    { name: 'Nejmar Jr', team: 'PSG' },
    { name: 'Kilian Mbape', team: 'PSG' },
    { name: 'Anhel DiMaria', team: 'PSG' },
    { name: 'Lautaro Martines', team: 'Inter' },
];

const isTeam = players.some(player => player.team === 'PSG');
console.log(isTeam); // true хотя бы один игрок из ПСЖ

const isTeam2 = players.every(player => player.team === 'PSG');
console.log(isTeam2); //false не все игроки из ПСЖ