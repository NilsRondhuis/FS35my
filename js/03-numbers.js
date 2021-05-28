/*
Парс числа с Number.parseInt(), Number.parseFloat()
*/

// let width = '20px';
// width = Number.parseInt(width);
// console.log(width);

// let height = '15.35px';
// height = Number.parseFloat(height);
// console.log(height);


/*-------------------------
- Метод число.toFixed(digits) отсекает
- Матрешки на примере console.log(Number(num.toFixed(digits)))
*/

// let salary = 1300.16472;
// const result = Number(salary.toFixed(2));
// console.log(result);


/* ------------------------
- Приведение (преобразование) к числу с Number(value)
- Значение NaN и метод Number.isNaN(value)
*/

/* ------------------------
- Обьект Math
- Возведение в степень
- Оператор экспонента
*/ 

// const base = 2;
// const power = 5;

// const result = base ** power; //Math.pow
// console.log(result);


/* -------------------------
Задачки
*/ 
/*--------------------------
1) Напиши скрипт который просит юзера ввести число и степень, 
   возводит число в эту степень и выводит резултат в консоль
*/

// const number = prompt('Введите число!');
// const power = prompt('Введите степень!');

// const result = number**power;

// console.log(result);

/* --------------------------
2) Генерация псевдослучайного числа
*/ 

// 1) Попросить ввести число от
// const min = prompt('Введите минимальное число');
// console.log(min);

// 2) Попросить ввести число до
// const max = prompt('Введите максимальное число');
// console.log(max);

// 3) Сложить результаты рандом
// const result = Math.random() * (max - min) + min; // формула
// console.log(Number.parseInt(result));

