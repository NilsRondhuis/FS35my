/*
 * call и apply
 */

// const showThis = function () {
//     console.log(this);
// }

// const obj = {
//     name: 'Sergio',
//     age: 34,
// };

// showThis.call(obj, 1, 2);
// showThis.apply(obj, [1, 2]);


// меняет команду

// const changeTeam = function (team) {
//     console.log('this: --- ', this);
//     this.team = team;
// }


// const player1 = {
//     name: 'Sergio Ramos',
//     team: 'Real Madrid',

//     // const changeTeam = function (team) {
//     //     console.log('this: --- ', this); Он уже тут
//     //     this.team = team;
//     // }
// };

// const player2 = {
//     name: 'Karim Benzema',
//     team: 'Real Madrid',
// };

// const a = changeTeam.bind(player1); // копия this всегда ссылается на обьект в ()
// a()

// console.log(player1);

// changeTeam.call(player1, 'Arsenal');

// console.log(player1);

// changeTeam.apply(player2, ['PSG'])

// console.log(player2);


/*
bind
*/

// const hotel = {
//     name: 'Palm',
//     star: 4,
//     showHotel () {
//         console.log(this);
//     }
// };


// const fnA = function (callback) {
//     callback();
// }

// const show = function () {
//     console.log(this);
// }

// const a = show.bind(hotel);
// a()

// fnA(hotel.showHotel.bind(hotel));