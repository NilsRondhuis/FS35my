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
        this.number = number;
    }

    changeTeam (team) {    // метод класса
        this.team = team;
    }
}

const sergioRamos = new PlayersTeam ({
    name: 'Sergio Ramos',
    team: 'No team', 
    number: 4,
});

sergioRamos.changeTeam('Dinamo Kyiv'); // метод класса

console.log(sergioRamos);

PlayersTeam.playerInfo(sergioRamos); // статическое свойство


