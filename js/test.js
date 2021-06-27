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


// 2)  Напишите функцию savePassword(password) которая принимает пароль и возвращает внутреннюю функцию,
// которая принимает строку и возвращает буль true, если строка совпадает с сохраненным паролем и false - если не совпадает.

// function makePasswordChecker(password) {

//     return function checker (string) {
//         console.log(password === string);
//     }
// }

// const checker = makePasswordChecker("Hello");

// checker('aaaaa');
// checker('bbbbb');
// checker('Hello');

// console.log(`checker`, checker("Aaaaaa")); // false
// console.log(`checker`, checker("Bbbbbbb")); // false
// console.log(`checker`, checker("Hello")); // true



// const a = {};
// const b = { key: 'b', };
// const c = { key: 'c', };
// const d = { a: 'sdfsadf'};

// a[b] = 1;
// a[c] = 2;
// a[d] = 4;

// console.log(a);



// напишите метод sum 

// вар1
// const some = (arr, callback) => {
//     for (const age of arr) {
//         if (age >= 18) {
//             return callback('Добро пожаловать в Парк Юрского перода!');
//         }
//     }
//     return console.log('Ошибка!');
// };

// const succes = (value) => {
//     console.log(value);
// };

// some([10, 12, 8, 14, 25, 6, 9], succes);


//вар2
// const some = (arr, callback) => {
//     for (const age of arr) {
//         // const result = callback(age);
//         if (callback(age)) {
//             return console.log('Welcome to Jurassic Park!');
//         }
//     }

//     return console.log('Error!');
// };

// some([10, 12, 8, 14, 25, 6, 9], (value) => value >= 18);


// товары

// const product = [
//     { name: 'Adidas', country: 'Vietnam', price: 1200, },
//     { name: 'Nike', country: 'USA', price: 3100, },
//     { name: 'Puma', country: 'China', price: 800, }
// ];

// const viewProduct = (arr, callback) => {
//     const unit = [];

//     for (const prod of arr) {
//         unit.push(callback(prod));
//     }

//     return unit;
// }

// console.log(viewProduct(product, (value) => value.name));
// console.log(viewProduct(product, (value) => value.country));
// console.log(viewProduct(product, (value) => value.price));



// Напишите функцию для хранения скидки.Функция возвращает другую функцию, которая принимает
// сумму покупки и возвращает финальную сумму с сохранённой скидкой.]

// const applyDiscount = function (discount) {
//     return function finalSum (sum) {
//         console.log(sum - sum * discount);
//     }
// };


// const withBaseDiscount = applyDiscount(0); // запоминает что дискаунт 0
// const withSilverDiscount = applyDiscount(0.05);
// const withGoldDiscount = applyDiscount(0.1);


// console.log(withBaseDiscount(100)); // 100
// console.log(withBaseDiscount(200)); // 200
// console.log(withSilverDiscount(100)); // 95
// console.log(withSilverDiscount(200)); //190
// console.log(withGoldDiscount(100)); // 90
// console.log(withGoldDiscount(200)); // 180



// 1) Напишите функцию makeCounter(), которая возвращает другую функцию, которая считает и логирует количество своих вызовов.

const makeCounter = function () {
    let num = 0;

    return function showNumber () {
        num += 1;
        console.log(num);
    }
}

const counter = makeCounter();

counter();
counter();



