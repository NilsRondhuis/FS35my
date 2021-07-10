// Задача 6
// function Storage (arr) {
//     this.items = arr;
// }

// Storage.prototype.getItems = function () {
//     return this.items;
// }
// Storage.prototype.addItem = function (newItem) {
//     this.items.push(newItem);
// }
// Storage.prototype.removeItem = function (item) {
//     this.items.splice(this.items.indexOf(item), 1);
// }



// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);

// console.log(storage);

// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// Задача 7
// function StringBuilder (baseValue) {
//     this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//     return this.value;
// }
// StringBuilder.prototype.padStart = function (str) {
//     const newArr = this.value.split();
//     newArr.unshift(str);
//     this.value = newArr.join('');
// }
// StringBuilder.prototype.padEnd = function (str) {
//     const newArr = this.value.split();
//     newArr.push(str);
//     this.value = newArr.join('');
// }
// StringBuilder.prototype.padBoth = function (str) {
//     const newArr = this.value.split();
//     newArr.unshift(str);
//     newArr.push(str);
//     this.value = newArr.join('');
// }

// StringBuilder.prototype.getValue = function () {      вариант 2
//     return this.value;
//   };
  
//   StringBuilder.prototype.padEnd = function (str) {
//     this.value += str;
//   };
  
//   StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
//   };
  
//   StringBuilder.prototype.padBoth = function (str) {
//     this.padStart(str);
//     this.padEnd(str);
//   };


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');

// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='



// Задача 15
// class Car {
//     
//     static MAX_PRICE = 50000;
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//         if (newPrice > Car.MAX_PRICE) {   //ОБРАЩЕНИЕ !!!
//             return;
//         }

//         this.#price = newPrice;
//     }
//     
//   }
  

//   const audi = new Car({price: 35000});
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000


// Задача 16

// class Car {
//     static #MAX_PRICE = 50000;
//     // Пиши код ниже этой строки
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return 'Внимание! Цена превышает допустимую.';
//         }

//         return 'Всё хорошо, цена в порядке.';
//     }
//     // Пиши код выше этой строки
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
//   console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// Задача 19

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

//   class Admin extends User {
//     // Пиши код ниже этой строки
  
//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };

//     accessLevel;
//     blacklistedEmails;
  
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }
  
//     // Пиши код выше этой строки
//   }
  
//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });
  
// //   console.log(mango.email); // mango@mail.com
// //   console.log(mango.accessLevel); // superuser
//   mango.blacklist('poly@mail.com');
//   console.log(mango.blacklistedEmails); // 'poly@mail.com'
//   console.log(mango.isBlacklisted('mango@mail.com')); //  false
//   console.log(mango.isBlacklisted('poly@mail.com')); // true 



