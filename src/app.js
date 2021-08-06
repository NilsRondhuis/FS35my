const fn = (a, b) => a + b;
fn(2, 3);

class Players {

    constructor (obj = {}) {
        const { name, team } = obj;
        this.name = name;
        this.team = team;
    }
};


const player = new Players({
    name: 'Sergio Ramos',
    team: 'PSG',
});

console.log(player);