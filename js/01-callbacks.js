/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = (message, callback) => {
//     console.log(message);

//     callback('Привет я аргумент функции fnB');
// }

// const fnB = (param) => {
//     console.log('Hello i function fnB,', param);
// }

// fnA('I function fnA', fnB);


/*
 * функция doMath(a, b, callback)
 */

// const doMath = (a, b, callback) => {
//     const result = callback(a, b);

//     console.log(result);
// }

// const fnB = (x, y) => {
//     return x + y;
// }

// // const fnC = (x, y) => {
// //     return x - y;
// // }

// doMath(4, 5, fnB);
// doMath(40, 34, (x, y) => x - y);


/*
 * Отложенный вызов: регистрация событий
 */

// const buttonRef = document.querySelector('.btn');

// const btnClick = () => {
//     console.log('Click button');
// }

// buttonRef.addEventListener('click', () => console.log('Click button!'));



/*
 * Фильтр
 */

const filter = (array, callback) => {
    const filteredArray = [];

    for (const el of array) {
        if (callback(el)) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

const fnA = (value) => {
    return value <= 3;
} 

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getMinPriceFruit = (value) => {
    return value.quantity >= 120;
}

// console.log(filter(fruits, getMinPriceFruit));
// console.log(filter([1, 2, 3, 4, 5], fnA));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], (value) => value >= 4)); // anom F