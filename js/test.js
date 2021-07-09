// class Phone {

//     #price;

//     constructor ({ brand, model, color, price } = {}) {
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(value) {
//         this.#price = value;
//     }
// };


// const iPhone8 = new Phone ({
//     brand: 'iPhone',
//     model: 8,
//     color: 'black',
//     price: 13000,
// });


// console.log(iPhone8);






// 1) Напиши класс User для создания пользователя со следующим свойствами:
// username - имя, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// Класс ожидает 1 параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку:
// User ${ имя } is ${ возраст } years old and has ${ кол - во постов } posts.


// class User {

//     constructor({ username, age, numberOfPosts: number} = {}) {
//         this.username = username;
//         this.age = age;
//         this.numberOfPosts = number;
//     }

//     getInfo() {
//         console.log(`User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`);
//     }
// };


// const ajax = new User({
//     username: 'Ajax',
//     age: 24,
//     numberOfPosts: 18,
// });

// ajax.getInfo();

// console.log(ajax);



// 3) Напиши класс Storage который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих.

// const storage = new Storage(["Яблоки", "Бананы", "Кокосы", "Киви"]);

// class Storage {

//     constructor(arr) {
//         this.items = arr;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(product) {
//         this.items.push(product);
//     }

//     removeItem(product) {
//         const index = this.items.indexOf(product);

//         // for (const item of this.items) {
//         //     if (item === product) {
//         //         this.items.splice(index, 1);
//         //     }
//         // }

//         if (this.items.includes(product)) {
//             this.items.splice(index, 1);
//         }

//         return this.items;
//     }
// };

// const storage = new Storage(["Яблоки", "Бананы", "Кокосы", "Киви"]);

// console.log(storage.removeItem('Кокосы'));
// storage.addItem('Манго');
// console.log(storage.getItems());
// console.log(storage);



// 4) Напиши класс Client который создаёт объект со свойствами login и email.
// Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class Client {
//     #login;
//     #email;

//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(value) {
//         this.#login = value;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(value) {
//         this.#email = value;
//     }
// };

// const poly = new Client({
//     login: 'poly1',
//     email: 'post@mail.com',
// });

// console.log(poly);


// 5)  Напиши клас Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь конструктору статическое свойство Priority, в котором будет храниться объект с приоритетами.
// {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   }

// let id = Date.now();

// const myNotes = new Notes([]);

// myNotes.addNote({  text: 'Моя первая заметка', priority: Notes.Priority.LOW })
// console.log(myNotes.items);

// myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL })
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);