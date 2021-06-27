// Задача 4

// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
        
//         for (const pizza of this.pizzas) {
//             if (pizza === pizzaName) {
//                 return onSuccess(pizzaName);
//                 // return;
//             }
//         }

//         return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     },
//   };
  
//   // Колбэк для onSuccess
//   function makePizza(pizzaName) {
//     return console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
//   }
  
//   // Колбэк для onError
//   function onOrderError(error) {
//     return console.log(`Ошибка! ${error}`);
//   }
  
//   // Вызовы метода с колбэками
//   pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
//   pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
//   pizzaPalace.order('Биг майк', makePizza, onOrderError);
//   pizzaPalace.order('Венская', makePizza, onOrderError);


// Задача 7
// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];

//     for (let i = 0; i < orders.length; i += 1) {
//         let result = composeMessage.call(orders[i], i + 1);
//         messages.push(result);
//     } 

// console.log(messages);


// Задача 10

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
