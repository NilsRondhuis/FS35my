// Задача 8

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);


// Задача 9
// const getExtremeElements = (array) => {
//     let a = [];
//     const firstEl = array.shift();
//     const lastEl = array.pop();
//     a.push(firstEl);
//     a.push(lastEl);

//     return a;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// Задача 11
/**
 * Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке. 
  **/
// 1) нужно строку превратить в массив
// 2) Перебрать массив через счетчик
// 3) Кол-во слов умножить на кол-во букв
// 4) Написать вар куда +=

// const calculateEngravingPrice = (message, pricePerWord) => {
//     let newArray = message.split(' ');
//     let total = 0;
    
//     for (let i = 0; i <= newArray.length; i += 1) {
//         total = i * pricePerWord;
//     }

//     return total;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// Задача 16

/**
 * Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
 */

// 1) Нужно склеить 2 массива
// 3) Создать пустой var кудаа кидать копию
// 2) Передать условия

// const makeArray = (firstArray, secondArray, maxLength) => {
//     const newArray = firstArray.concat(secondArray);

//     let copyArray;

//     if (newArray.length >= maxLength) {
//         copyArray = newArray.slice(0, maxLength);
//     } else {
//         copyArray = newArray.slice();
//     }
    
//     return copyArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


// Задача 21
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// 1) Нужно узнать самое длинное слово
// 2) Сделать из строки массив и перебрать повесить на каждое слово длину

// const findLongestWord = (string) => {
//     const newArray = string.split(' ');
//     let longWord = 0;
//     let finalWord = '';

//     for (let i = 0; i < newArray.length - 1; i += 1) {
//         if (longWord < newArray[i].length) {
//             // console.log('length ARR: ', newArray[i].length);
//             longWord = newArray[i].length;
//             // console.log('LONG WORD: ', longWord);
//             finalWord = newArray[i];
//             // console.log('FINAL: ', finalWord);
//         }
//     }

//     return finalWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


// Задача 23
// 1) Их нужно будет сравнить, а значит перебрать, перебираем
// 2) Создать пустой массив 

// const filterArray = (numbers, value) => {
  // let newArray = [];

  // for (let number of numbers) {
  //   if (number > value) {
  //     newArray.push(number);
  //   }
  // }

  // return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Задача 25
// 1) Нужно перебрать один массив и запихнуть в условия проверку на иклюд и запушить
// 2) Создать пустой массив

// const getCommonElements = (array1, array2) => {
//   let newArray = [];

//   for (const arr1 of array1) {
//     if (array2.includes(arr1)) {
//       newArray.push(arr1);
//     }
//   }
  
//   return newArray;
// }


// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// Задача 32 
// 1) Один массив нужно перебрать 
// 2) Сровнять в иф вывести в ретерн

// const includes = (array, value) => {

//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));








