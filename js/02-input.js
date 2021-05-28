/*
Ввод пользователя 
Методы confirm(), prompt()
*/

const shouldRenew = confirm('Exit page?');
console.log(shouldRenew);


let quantity = prompt('Quantity product?');
quantity = Number(quantity);
console.log(typeof quantity);
