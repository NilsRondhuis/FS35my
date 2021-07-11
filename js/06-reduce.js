/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//     return acc + number;
// }, 0);

// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25


/*
 * Считаем общую зарплату
 */

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce((total, salary) => total + salary, 0);

// console.log(totalSalary);


/*
 * Считаем общее количество часов
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTime = players.reduce((total, timePlayer) => total + timePlayer.timePlayed, 0);
// console.log(totalTime);


/*
 * Собираем все теги из твитов
 */

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((accTags, tweet) => {
    // accTags.push(...tweet.tags);

    return [...accTags, ...tweet.tags];
}, []);

console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']


/*
 * Ведём статистику тегов
 */

const tagStats = allTags.reduce((acc, tag) => {
    // if (!acc.hasOwnProperty(tag)) {
    //     acc[tag] = 0
    // }

    // acc[tag] += 1;


    // return acc;
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }
}, {});

console.log(tagStats);




