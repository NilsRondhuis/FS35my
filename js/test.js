// 6) Написать програму которая спрашивает у пользователя цены, он вписывает их через prompt, с помощью массивов
// пока не нажмет отмену. После этого посчитать суму чисел и используя alert вывести результат на экран




// 5) Написать ф - ю capitalize которая буде принимать строку и будет возвращать новую где каждое слово будет с большой буквы
// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// 1) Создать Ф с одним параметром
// 2) Превратить строку в массив и перебрать 
// 3) Сделать первую букву в слове большой
// 4) Обрезать букву у слова
// 5) Создать массив для новых слов

// const capitalize = string => {
//     const arrayFromString = string.split(' ');
    
//     const newArray = [];

//     for (let word of arrayFromString) {
        
//         let firstLetter = word[0].toUpperCase();
        
//         let restString = word.slice(1);
        
//         let finalString = `${firstLetter}${restString}`;
       
//         newArray.push(finalString);
//     }

//     return newArray.join(' ');
// }

// console.log(capitalize("the quick brown fox"));


// 6) Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое

// addCourse('Express'); // ["HTML", "CSS", "JavaScript", "React", "PostgreSQL", "Express"];
// addCourse('CSS'); // У вас уже есть такой курс
// removeCourse('React'); // ["HTML", "CSS", "JavaScript", "PostgreSQL", "Express"];
// removeCourse('Vue'); // Курс с таким именем не найден;
// updateCourse('Express', 'NestJS'); // ["HTML", "CSS", "JavaScript", "PostgreSQL", "NestJS"];

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// const addCourse = name => {

//     if (courses.includes(name)) {
//         return 'У вас уже есть такой курс';
//     }

//     courses.push(name);
//     return courses;
// }

// console.log(addCourse('Express'));
// console.log(addCourse('CSS'));

// 1) Написать условие входит ли данный курс в колекцию
// 2) Если есть он как то его удалить проверить на индекс оф

// const removeCourse = name => {

//     if (courses.includes(name)) {
//         const deleteCourses = courses.indexOf(name);
//         courses.splice(deleteCourses, 1);
//     } else {
//         return 'Курс с таким именем не найден';
//     }

//     return courses;    
// }

// console.log(removeCourse('React'));
// console.log(removeCourse('Vue'));

// 1) Написать Ф с двумя параметрами
// 2) Узнать на каком индексе курс который надо заменить
// 3) Использовать методы для замены 

// const updateCourse = (newCourse, update) => {
//     const updateEl = courses.indexOf(update);
//     courses.splice(updateEl, 1, newCourse);
//     return courses;
// }

// console.log(updateCourse('Express', 'PostgreSQL'));






