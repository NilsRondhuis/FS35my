// Написать скрипт рандомних цитат

// const arrQuote = [
//     'Цитата-1',
//     'Цитата-2',
//     'Цитата-3',
//     'Цитата-4',
//     'Цитата-5',
//     'Цитата-6',
//     'Цитата-7',
//     'Цитата-8',
//     'Цитата-9',
//     'Цитата-10',
//     'Цитата-11',
//     'Цитата-12',
//     'Цитата-13',
//     'Цитата-14',
//     'Цитата-15',
//     'Цитата-16',
//     'Цитата-17',
//     'Цитата-18',
//     'Цитата-19',
//     'Цитата-20',
// ];

// const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);

// console.log(randomNumber);

// for (let i = 1; i <= arrQuote.length; i += 1) {
    
//     if (randomNumber === i) {
//         console.log(arrQuote[i]);
//     }
// }

//---------------------------------------------------------

// const GeneratorQuote = function (quote = {}) {
//     this.actualQuote = quote;
// }

// GeneratorQuote.prototype.showQuote = function (random) {
//     for (let i = 0; i <= this.actualQuote.length; i += 1) {
//         if (random() === i) {
//             return console.log(this.actualQuote[i - 1]);
//         }
//     }
// }

// const quoteDay = new GeneratorQuote(arrQuote);
// quoteDay.showQuote(() => Math.round(Math.random() * (20 - 1) + 1));



// 1) Написать ф - ю конструктор которая создает обект person с такими ключами
// const person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить строку Привет {имя} мне {возраст} лет. Мне нравится {интерес}
//   },
//   greeting() {
//     // Привет, я {имя}
//   },
// };

const GeneratePerson = function (obj) {

    const { firstName, lastName, age, gender, interest } = obj;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
};

const Teacher = function (obj) {
    const { subject } = obj;

    GeneratePerson.call(this, obj);
    this.subject = subject;
};

const person = new GeneratePerson({
    firstName: 'Sergio',
    lastName: 'Ramos',
    age: 34,
    gender: 'man',
    interest: 'Real Madrid',
})

const teacher = new Teacher({
    firstName: 'Zinedin',
    lastName: 'Zidan',
    age: 54,
    gender: 'man',
    interest: 'Real Madrid',
    subject: 'coach',
});

GeneratePerson.prototype.bio = function () {
    console.log(`Привет я ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interest}`);
}

GeneratePerson.prototype.greeting = function () {
    console.log(`Привет, я ${this.firstName}`);
}

console.log(person);
console.log(teacher);
