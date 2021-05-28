/*
- Оператор ветвление if
- Оператор ветвление if...else
- Оператор ветвление else...if
*/ 

// if (true) {
//     console.log('Тело выполняется');
// }
// if (false) {
//     console.log('Тело не выполняется');
// }


// if (false) {
//     console.log('not performed');
// } else {
//     console.log('performed');
// }


// const salary = 1000;

// if (salary <= 500) {
//     console.log('level 1');
// } else if (salary > 500 && salary <= 1500) {
//     console.log('level 2');
// } else if (salary > 1500 && salary <= 5000) {
//     console.log('level 3');
// } else {
//     console.log('level 4');
// }


/* ----------------------------
- Тернарный оператор
*/ 

const balanse = 1000;
let message;

// if (balanse > 0) {
//     message = 'positive balans';
// } else {
//     message = 'negative balans';
// }

message = balanse > 0 ? 'positive balans' : 'negative balans';

console.log(message);
