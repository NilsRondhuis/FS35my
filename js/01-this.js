/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */

// const user = {
//     name: 'Sergio',
//     showName () {
//         console.log('showName -> this: ', this);
//     }
// }

// user.showName();


/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();



/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */

// const showName = function () {
//     console.log('showName - this: ', this);
//     console.log('showName - this: ', this.name);
// }

// const user = {
//     name: 'Sergio',
// };


// user.showUserName = showName;

// user.showUserName();


/*
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();
// user.outerShowTag(); 
// будет как обращение к свойству которое не сущевствует


/*
 * Контекст в callback-функциях
 */

// const user = {
//     tag: 'Mango',
//     number: 4,
//     showUser() {
//         console.log('showTag -> this --- ', this);
//         console.log('showTag -> this.tag --- ', this.tag);
//         console.log('showTag -> this.number --- ', this.number);
//         console.log('showTag -> this.number --- ', this.team);
//     },
// };

// user.team = 'Madrid';

// // user.showUser();

// const fnA = function (callback) {
//     console.log(callback);

//     callback();
// };

// fnA(user.showUser);



/*

*/

// const makeChangeColor = function () {

//     const changeColor = function (color) {
//         console.log('changeColor -> this --- ', this);
//         this.color = color;
//     };

//     const sweater = {
//         color: 'teal'
//     };

//     sweater.updateColor = changeColor;
    
//     sweater.updateColor('red');

//     return sweater;

// }

// console.log(makeChangeColor());



// ===================

// const player = {
//     name: 'Sergio',
// };

// console.log(player);

// const renamePlayer = function (name) {
//     this.name = name;
// }

// player.changeName = renamePlayer;

// player.changeName('Lionel');

// console.log(player);


