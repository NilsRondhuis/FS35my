import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */
// console.log('Вызов 1');

// setTimeout((x) => {
//   console.log(x);
//   console.log('Вызов сет тайм аут 2 сек');
// }, 2000, 10);

// console.log('Вызов 2');

// setTimeout(() => {
//   console.log('Вызов через 3сек');
// }, 3000);


/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}мс, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}

