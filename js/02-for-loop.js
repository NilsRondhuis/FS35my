/*
for (инициализация; условие; пост - выражение) {
    тело
}
*/ 

// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
// }

/* --------------------------------------------------------------------
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// 1) сделать вари 

// const maxSalary = 5000;
// const minSalary = 500;
// let employees = 4;
// let totalSalary = 0;

// 2) Генерить случайную зп

// 3) написать цикл
// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Работник ${i} - ${salary} ЗП`);

//     totalSalary += salary;
// }

// console.log(`Общее кол-во ЗП - ${totalSalary}`);

/* ------------------------------------------------------------
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// 1) написать вары 
const min = 1;
const max = 10;
let total = 0;

// 2) написать в цикл
for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);

    total += i;
}

console.log(total);

// 3) в цикле написать условие которое будет считать только четные числа

// 4) вывести в тотал залогировать