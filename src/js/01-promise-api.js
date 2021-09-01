/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)')
    }
  
    reject('Промис выполнился с ошибкой (отклонен, rejected)');
  }, 1000);
});

// console.log(promise);
// promise.then(result => console.log(result), error => console.log(error));
//можно так же написать отдельные ф-ции


/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
.then(succes => console.log(succes))
.catch(error => console.log(error))
.finally(() => console.log('Я выполнюсь в любом случаи'))
