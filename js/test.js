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

//  получить массив ученых которые родились в 19 ст
//  Посчитать суму лет сколько прожили все ученные
//  Отсортировать по алфавиту
//  Отсортировать по количеству прожитых лет
//   Удалить ученых которые родились в 15,16,17 ст
//   Найти год рождения Albert Einstein
//   Узнать все ли ученые работала в 19 ст

// const scientistBorn = (arr, name) => {
//     const result = arr.find(scientist => scientist.name === name);
//     return result.born;
// };


// console.log(scientistBorn(scientists, 'Albert'));

// const result = scientists.filter(scientist => scientist.dead > 1800);
// console.log(result);


//  Сортировка примитивов
// Выполнить сортировку массива цен по убыванию и возрастанию.

const prices = [2, 14, 1, 37, 26, 8];

// const r1 = prices.sort((a, b) => a - b);
// console.log(r1);

// const r2 = prices.sort((a, b) => b - a);
// console.log(r2);


// Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.

const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];

// const r1 = items.sort();
// console.log(r1);

// const r2 = items.sort((a, b) => a[0] > b[0] ? -1 : 1);
// console.log(r2);


// Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя Array.prototype.filter выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы.
const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Functions",
      "Conditions",
      "Classes",
      "DOM",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Promises",
      "AJAX",
      "Git",
      "GitHub",
    ],
  },
];

// const result = courses.flatMap(cours => cours.topics).filter((cours, index, arr) => arr.indexOf(cours) === index);

// console.log(result);


async function getData() {
  let result = null;
  let response = await fetch("https://restcountries.eu/rest/v2/all");
  result = await response.json();
  return result;
}

// getData().then((data) => localStorage.setItem("arr", JSON.stringify(data)));

const arr = JSON.parse(localStorage.getItem("arr"));
console.log(arr);

// Получить стрыны из региона Europe
// Получить название самой большой страни в Европе
// Получить название самой маленькой страни в Европе
// Получить список стран с которыми граничит Швейцария (Switzerland)
// Получить процент который занимает  Австрия  в мире


// Получить стрыны из региона Europe -------------------------------------------------

//my ver
// const EUROPE = arr.filter(region => region.region === 'Europe');
// console.log('Страны из региона Европы', EUROPE);

const COUNTRY = {
  EUROPE: 'Europe', 
};

const getBigRegion = (arr, name) => arr.filter(country => country.region === name);
console.log('Страна из региона Европы', getBigRegion(arr, COUNTRY.EUROPE));



// Получить название самой большой страни в Европе ------------------------------------------

//my ver
// const getBigCountry = arr => {
//   const arrArea = arr.map(country => country.area);
//   const maxArea = Math.max(...arrArea);
//   const result = arr.find(country => country.area === maxArea);
//   return result.name;
// }
// console.log('Самая большая страна в Европе --- ', getBigCountry(arr));

const callback = getBigRegion(arr, COUNTRY.EUROPE);

const getNameBigCountry = (callback) => {
  callback.sort((a, b) => b.area - a.area);
  return callback;
};

console.log('Самая большая страна в регионе', getNameBigCountry(callback));


// Получить список стран с которыми граничит Швейцария (Switzerland)

// my ver
const result = arr.filter(country => {
  if (country.borders.includes('CHE')) {
    return country.name;
  }
})

console.log('Cписок стран с которыми граничит Швейцария', result);


// Получить процент который занимает  Австрия  в мире
