/*
 * Наследование
 *  - extends
 *  - super()
 */


// class Hero {
//     constructor({ name = 'Hero', xp = 0 } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero{
//     constructor(obj, {weapon} = {}) {
//         super(obj);

//         this.weapon = weapon;
//     }
// };

// const mango = new Warrior({
//     name: 'Mango',
//     xp: 1000,
// },
// { weapon: 'shotgun'});

// mango.gainXp(1000);
// console.log(mango);



class Player {
    constructor ({ name, number } = {}) {
        this.name = name;
        this.number = number;
    }

    selectNumber(number) {
        console.log(`Players ${this.name} get ${number} number.`);
        this.number = number;
    } 

    selectTeam(team) {
        this.team = team;
    }
};

class PlayerTeam extends Player {
    constructor ({ team, ...restProps } = {}) {   // не забывай про ...рест
        super(restProps);
        
        this.team = team;
    }
};

const sergioRamos = new PlayerTeam({
    name: 'Sergio Ramos',
    number: 4,
    team: 'PSG',
});

sergioRamos.selectNumber(9);
// sergioRamos.selectTeam('Arsenal');

console.log(sergioRamos); 


