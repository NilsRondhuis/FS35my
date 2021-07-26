 /*
substring()
возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
*/

// const str = 'Hello';
// console.log(str.substring(3, 0));



/*
replace()
не изменяет ориг
делает копию
*/

const a = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const a2 = 'Hello R2D3';
const goldNumber = '098-666-77-88';

const res = a.replace('dog', 'cat');
const res2 = a.replace(/dog/gi, 'cat'); // синтаксис регулярного /выражения/ с ключами global, ignoreCase

// console.log('res---', res);
// console.log('res2---', res2);
// console.log(a);

// const res3 = a2.replace('2', '5');

// console.log('res3 ---', res3);
// console.log(a2);

const res4 = goldNumber.replace(/[6]/g, '9');

console.log(res4);
