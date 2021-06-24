/*
Ф-ции конструкторы
*/

// function UserInfo (name) {

//     // this = {}; Создается пустой обьект (неявно)

//     this.name = name;
//     this.age = 30;

//     // return this; Возвращается обьект (неявно)
// }

// console.log(new UserInfo('Sergio'));



// letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name



// const letMeSeeYourName = callback => {
//     const nameEnter = prompt('Enter name');
    
//     return callback(nameEnter);
// }


// const greet = name => {
//     return console.log(`Привет ${name}!`);
// }

// letMeSeeYourName(greet);


// // Напишите две функции:

// makeProduct(name, price, callback) - принимает имя и цену товара, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// showProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль


const makeProduct = (name, price, callback) => {

    const obj = {
        name,
        price,
        // id: Date.now(),
    };

    obj.id = Math.round(Math.random() * (900 - 1) + 1);

    callback(obj);
};

const showProduct = product => {
    return console.log(product);
}


makeProduct('Shiha', 250, product => console.log(product));
makeProduct('Cocaine', 150, showProduct);