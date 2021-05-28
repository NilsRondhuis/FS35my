/*
Свойтво длинны length, это не вызов а обращение
*/ 

// const message = 'Длинная строка';
// // console.log(message.length);


/*----------------------
- Конкатенация строк
- Шаблонные строки + интерполяция ${1221}
- Нормализация методом toLowerCase
- Обращение по индексу id[]
*/

// const userSearch = prompt('Введите название ноутбука');
// const normalizedString = userSearch.toLowerCase();
// console.log(normalizedString);

/*---------------------------
- Метод строки includes()
*/ 

const blackListWord1 = 'спам';
const blackListWord2 = 'казино';

const message = 'Добрый день! Это не СПАМ, переходите в казино и заберите 10.000'

if (message.toLowerCase().includes(blackListWord1) === true) {
    console.log('Рассылка запрещена!');
} else {
    console.log(message);
}
