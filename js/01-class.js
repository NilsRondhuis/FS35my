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
class PlayersTeam {

    #test = 'test';  // приватное свойство

    static playerInfo(info) {                // статические свойства
        console.log('Show info ---', info);
    };

    constructor (obj = {}) {
        const { name, team, number } = obj;

        this.name = name;
        this.team = team;
        this._number = number;
    }

    changeTeam (team) {    // метод класса
        this.team = team;
    }

    // getNumber () {
    //     return this.name;
    // }

    get number () {             //геттер
        return this._number;
    }

    // setNumber (newNum) {
    //     this.name = newNum;
    // }

    set number (newNum) {
        this._number = newNum;
    }
}

const sergioRamos = new PlayersTeam ({
    name: 'Sergio Ramos',
    team: 'No team', 
    number: 4,
});

sergioRamos.changeTeam('Dinamo Kyiv'); // метод класса
PlayersTeam.playerInfo(sergioRamos); // статическое свойство
console.log(sergioRamos.number); // обращение к геттеру (читается свойство)
sergioRamos.number = 8; // запись, выз сеттера

console.log(sergioRamos);



