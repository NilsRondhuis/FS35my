// const btnAdd = document.querySelector('.btn');
// const btnRes = document.querySelector('.btn[data-reset]');
// const valueAdd = document.querySelector('[data-value]');
// const outputEl = document.querySelector('.js-output span');

// let total = 0;

// btnAdd.addEventListener('click', function () {
//     console.log('click');
//     const value = Number(valueAdd.value);
//     console.log(value);

//     total += value;
//     outputEl.textContent = total;

//     valueAdd.value = '';
// });

// btnRes.addEventListener('click', () => {
//     total = 0;
//     outputEl.textContent = 0;
// })
// ---------------------------------------------------------


// // Написать программу которая получит от пользователя число и определит четное это число или не четное.

// 1) Создать вари с промпт
const userNumber = Number(prompt('Enter the number'))
let message;

// 2) Сделать иф из условием
if (userNumber % 2 === 0) {
    message = `Even: ${userNumber}`;
} else {
    message = `Odd: ${userNumber}`;
}

// 3) Вывести консоли
console.log(message);