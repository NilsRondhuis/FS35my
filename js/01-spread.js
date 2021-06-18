/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

const numbers = [1, 2, 3];

const numbers2 = [...numbers, 4, 5];

// console.log(numbers2);


/*
 * Поиск самой маленькой или большой температуры (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.min(...temps));
// console.log(temps);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);



/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({name: 'Mango' }, a, b);

const c = {
  ...a,
  x: 10,
  ...b,
  y: 20,
};

// console.log(c);

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
