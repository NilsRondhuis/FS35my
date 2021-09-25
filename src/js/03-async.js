// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

async function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fruits[name]);
    }, 500);
  });
}

// Паралельные операции с Promise.all()
async function asyncMakeSmoothie() {
  console.time('asyncMakeSmoothie');
  const apple = getFruit('apple');
  const kiwi = getFruit('kiwi');
  const strawberry = getFruit('strawberry');

  const fruits = await Promise.all([apple, kiwi, strawberry]);
  console.log(fruits);
  console.timeEnd('asyncMakeSmoothie');
}
asyncMakeSmoothie()

// Последовательные операции
// async function asyncMakeSmoothie() {
//   console.time('asyncMakeSmoothie');
//   const apple = await getFruit('apple');
//   console.log(apple);

//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
//   console.timeEnd('asyncMakeSmoothie');
// }
// asyncMakeSmoothie();


// Последовательные операции
// async function asyncMakeSmoothie() {
//   const apple = await getFruit('apple');
//   console.log(apple);

//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
// }
// asyncMakeSmoothie()

// function makeSmoothie() {
//   getFruit('apple').then(apple => {
//     console.log(apple);

//     getFruit('kiwi').then(kiwi => {
//       console.log(kiwi);
//     })
//   });
// }



// const fn = async function () {};  expression
// const fn = async () => {};  arrow
// const x = {                  method obj
//   async getName() {  

//   }
// }
// class Name {        method class
//   async getName() {

//   }
// }
