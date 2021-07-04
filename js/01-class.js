/*
 * Классы
 *  - объявление
 *  - конструктор
 *  - методы
 *  - static
 *  - приватные свойства
 *  - синтаксис публичных свойства и методы классов
 *  - геттеры и сеттеры
 */

// синтаксис класса
class Car1 {
    constructor () {
        // console.log('Run constructor');
        // console.log(this);

        this.a = 5;
        this.b = 2;
    }
};

const myCar = new Car1();

// console.log(myCar);

// console.log('Prototype myCar -----', Object.getPrototypeOf(myCar));


class PlayersTeam {
    constructor (obj = {}) {
        const { name, team, number } = obj;

        this.name = name;
        this.team = team;
        this.number = number;
    }

    changeTeam (team) {
        this.team = team;
    }
}


const sergioRamos = new PlayersTeam ({
    name: 'Sergio Ramos',
    team: 'No team', 
    number: 4,
});

sergioRamos.changeTeam('Dinamo Kyiv');

console.log(sergioRamos);



