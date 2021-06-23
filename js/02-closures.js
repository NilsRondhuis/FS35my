/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

// const fnA = (parametr) => {
//     const message = 'Область видимости замыкания'

//     const innerFn = () => {
//         console.log(parametr);
//         console.log('Я внутрення функция');
//     }

//     return innerFn;
// }

// const clousore = fnA('Могу вызвать где угодно');

// clousore();

// console.log(clousore);


/*
Футболист 
*/ 
// const playerName = (name) => {

//     const playerAction = (action) => {
//         console.log(`Игрок ${name} реализовал ${action}!`);
//     }

//     return playerAction;
// };

// console.dir(playerName());
// const playerRamos = playerName('Sergio Ramos');
// const playerMessi = playerName('Lionel Messi');



// playerMessi('пенальти');
// playerRamos('гол');
// playerRamos('штрафной');


/*
Округлятор 
*/ 

// const rounder = (round) => {
//     return (number) => {
//         return number.toFixed(round);
//     }
// }

// const rounder1 = rounder(2);
// const rounder2 = rounder(3);

// console.log(rounder2(2.42325));





