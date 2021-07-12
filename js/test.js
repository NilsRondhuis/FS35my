const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
  
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
];


//  получить массив ученых которые родились в 19 ст и вывести на экран их имя и фамилию
//  Посчитать суму лет сколько прожили все ученные
//  Отсортировать по алфавиту
//  Отсортировать по количеству прожитых лет
//   Удалить ученых которые родились в 15,16,17 ст
//   Найти год рождения Albert Einstein
//   Узнать все ли ученые работала в 19 ст

 
// Задача 1 получить массив ученых которые родились в 19 ст и вывести на экран их имя и фамилию --------

// my ver
// const callback = (scientist) => {
//     if (scientist.born >= 1800 && scientist.born < 1900) {
//         console.log(`${scientist.name} ${scientist.surname} родились в 19 веке - ${scientist.born}`);
//     }
// }

// callback(scientists);

// scientists.filter(callback);


// ver 2

// const result = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900).map(scientist => `${scientist.name} ${scientist.surname}`);

// console.log('Массив ученых которые родились в 19 веке --- ', result);



// Задача 2 Посчитать суму лет сколько прожили все ученные -----------------------------------------

// const result = scientists.reduce((totalYear, scientist) => totalYear + (scientist.dead - scientist.born), 0);

// console.log('Общее кол-во прожитых лет ученых --- ', result);


// Задача 3 Отсортировать по алфавиту -------------------------------------------------------

// const copy = [...scientists];
// copy.sort((a, b) => a.name > b.name ? 1 : -1);
// console.log(copy);

//ver 2
// const result = scientists.map(scientist => scientist.name).sort()
// console.log(result);

// Задача 4 Отсортировать по количеству прожитых лет ------------------------------------------------

// ver1
// const copy = [...scientists];
// copy.sort((a, b) => a.born - b.born);
// console.log(copy);

// ver2
// const result = scientists.map(scientist => scientist.dead - scientist.born).sort();
// console.log(result);

// ver3
// copy.sort((a, b) => (b.dead - b.born) - (a.dead - a.born));  // можно наоборот
// console.log(copy);

// Задача 5 Удалить ученых которые родились в 15,16,17 ст -----------------------------------------
console.log(scientists);
// const result = scientists.filter(scientist => scientist.born < 1400 || scientist.born > 1600); // пример фильтрации как удаление
// console.log(result);

const result = scientists.filter(scientist => scientist.id !== 7);  // пример удаления из массива
console.log(result);

// Задача 6 Найти год рождения Albert Einstein



