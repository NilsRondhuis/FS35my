// Планирование setTimeout и setInterval
/*
Что бы реализовать планирование существуют два метода:
1.	setTimeout позволяет вызвать функцию один раз
	через определённый интервал времени
2.	setInterval позволяет вызывать функцию регулярно,
	повторяя вызов через определённый интервал времени.
*/
/*
setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/


function showMessage(text, name) {
    console.log(`${text}, ${name}!`);
};

// setTimeout(showMessage, 2000, 'Hello', 'word');
// setInterval(showMessage, 500, 'Hello', 'Sergio');

// сет интервал на рекурсивном сеттаймаут
// function showNumber(num) {
// 	console.log(num);
// 	if (5 > num) {
// 		setTimeout(showNumber, 1000, ++num);
// 	}
// };

// setTimeout(showNumber, 1000, 1);


/*
Остановит работу сеттаймаут обьявленого ренее

clearTimeout(var);
*/

// function showNumber(num) {
// 	console.log(num);
// 	let timeId = setTimeout(showNumber, 1000, ++num);
// 	if (num === 6) {
// 		clearTimeout(timeId);
// 	}
// };

// setTimeout(showNumber, 1000, 1);


/*
Так же только интервал

clearTimeout(var);
*/

// let result = 0;

// function calcNum(num) {
// 	result += num;
// 	console.log(result);
// 	if (result === 10) {
// 		clearInterval(timeId);
// 	}
// };

// let timeId = setInterval(calcNum, 1000, 1);