/*
 * Промисификация:
 * - Проблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//   const DELAY = 1000;

//       return new Promise((resolve, reject) => {
//           const passed = Math.random() > 0.5;
//           setTimeout(() => {
//             if (passed) {
//                 resolve(`Ваш ${dish} готов`);
//             }
  
//             reject('Извините закончились продукты')
//           }, DELAY);
//       });
// };

// makeOrder('пирог').then(onMakeOrderSuccess).catch(onMakeOrderError);


// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = dish => {
//     return Promise.resolve(`Ваш ${dish} готов`);
// };
  
// makeOrder('пирог').then(onMakeOrderSuccess);
  
  
// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// }
  
// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }

/*
 * Покемоны с https://pokeapi.co/
 */
