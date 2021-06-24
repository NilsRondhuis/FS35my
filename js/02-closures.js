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




/*
Приватные даные
*/ 

const salaryManager = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        add(value) { //премия
            if (value > 1000) {
                return 'Внимание!'
            }
            salary += value;
        },
        pickUp(value) {  //штраф
            salary -= value;
        },
        showCurrent() {
            return `Текущая зарплата ${employeeName} - ${salary}.`;
        }
    };
};


const salaryCreate = salaryManager('Sergio', 6000);

salaryCreate.add(1000)
salaryCreate.pickUp(400);
console.log(salaryCreate.showCurrent());

