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

// const GeneratePerson = function (obj) {

//     const { firstName, lastName, age, gender, interest } = obj;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;
// };

// const Teacher = function (obj) {
//     const { subject } = obj;

//     GeneratePerson.call(this, obj);
//     this.subject = subject;
// };

// const person = new GeneratePerson({
//     firstName: 'Sergio',
//     lastName: 'Ramos',
//     age: 34,
//     gender: 'man',
//     interest: 'Real Madrid',
// })

// const teacher = new Teacher({
//     firstName: 'Zinedin',
//     lastName: 'Zidan',
//     age: 54,
//     gender: 'man',
//     interest: 'Real Madrid',
//     subject: 'coach',
// });

// GeneratePerson.prototype.bio = function () {
//     console.log(`Привет я ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interest}`);
// }

// GeneratePerson.prototype.greeting = function () {
//     console.log(`Привет, я ${this.firstName}`);
// }

// console.log(person);
// console.log(teacher);


// НАСЛЕДОВАНИЕ

const PlayersTeam = function ({ name, team, number }) {

    this.name = name;
    this.team = team;
    this.number = number;
}

PlayersTeam.prototype.greeting = function () {
    return console.log(`Hello my name is ${this.name}`);
};


const player1 = new PlayersTeam({ 
    name: 'Ramos', 
    team: 'Real Madrid', 
    number: 4,
});

console.log(player1);

player1.greeting()

const player2 = new PlayersTeam({
    name: 'Benzema',
    team: 'Real Madrid',
    number: 12,
});

console.log(player2);

const CoachTeam = function (obj) {
    // this = {}
    const { position } = obj;
    PlayersTeam.call(this, obj);
    this.position = position;
    // return this
};

CoachTeam.prototype = Object.create(PlayersTeam.prototype);
CoachTeam.prototype.constructor = CoachTeam;


const coach = new CoachTeam({ 
    name: 'Zidan',
    team: 'Real Madrid',
    number: 1,
    position: 'coahc', 
});

console.log(coach);
coach.greeting()