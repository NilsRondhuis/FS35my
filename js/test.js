// const counter = {
//     value: 0,
//     increment () {
//         this.value += 1;
//     },
//     decrement () {
//         this.value -= 1;
//     }
// };


// const incrementBtn = document.querySelector('.js-increment');
// const decrementBtn = document.querySelector('.js-decrement');
// const valueEl = document.querySelector('.js-number');

// // const addIncrement = function (callback) {
// //     callback();
// //     valueEl.textContent = counter.value;
// // }

// // addIncrement(counter.increment.bind(counter));

// incrementBtn.addEventListener('click', () => {
//     counter.increment();
//     valueEl.textContent = counter.value;
// });

// decrementBtn.addEventListener('click', () => {
//     counter.decrement();
//     valueEl.textContent = counter.value;
// });

// 1) Напишите функцию makeCounter(), которая возвращает другую функцию, которая считает и логирует количество своих вызовов.


// 2)  Напишите функцию savePassword(password) которая принимает пароль и возвращает внутреннюю функцию,
// которая принимает строку и возвращает буль true, если строка совпадает с сохраненным паролем и false - если не совпадает.

function makePasswordChecker(password) {

    return function checker (string) {
        console.log(password === string);
    }
}

const checker = makePasswordChecker("Hello");

checker('aaaaa');
checker('bbbbb');
checker('Hello');

// console.log(`checker`, checker("Aaaaaa")); // false
// console.log(`checker`, checker("Bbbbbbb")); // false
// console.log(`checker`, checker("Hello")); // true





