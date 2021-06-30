/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */



const Car = function ({ brand, model, price } = {}) {          // деструктуризация
     // 2. Функция вызывается в контексте созданного объекта,
     // то есть в this записывается ссылка на него
     
    this.brand = brand;
    this.model = model;
    this.price = price;

      // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
      //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
     
      // 4. Ссылка на обьект возвращается в место вызова new Car()
};

Car.prototype.sayHi = function () {
    console.log('Car.prototype.sayHi this ---- ', this);
    console.log('Привет я ф-ция sayHi');
};


// 1. Если функция вызывается через new, создаётся пустой объект
const myCar = new Car({
    brand: 'Chevrolet',
    model: 'Camaro',
    price: 15000,
});

myCar.sayHi();

console.log(myCar);

const myCar2 = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

console.log(myCar2);

const myCar3 = new Car();

console.log(myCar3);


/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

User.logInfo(mango);



// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()
