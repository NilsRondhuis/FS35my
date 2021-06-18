// 1)  Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// console.log(user);

// for (const us of Object.keys(user)) {
//     console.log(us, user[us]);
// }


// 2) У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const calcSalary = (value) => {
//     let total = 0;

//     for (const sal of Object.values(value)) {
//         total += sal;
//     }

//     return total;
// }

// console.log(calcSalary(salaries));



// 3) Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// 1) перебрать массив обьектов и достучатся до ключей 
// 2) Создать тотал для стоимости
// 3) перемножить ключи и записать тотал

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// const calcTotalPrice = (stones, stoneName) => {
//     let total = 0;

//     for (const ston of stones) {
        
//         if (ston.name === stoneName) {
//             total = ston.price * ston.quantity;
//         }
//     }

//     return total;
// }

// console.log(calcTotalPrice(stones, "Бриллиант")); // 8100






// 5) Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
      return {
        id: this.transactions.length,
        amount,
        type,
      };
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));

        return console.log(`Ваш баланс пополнен на сумму ${amount}, текущий баланс ${this.balance}.`);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (this.balance < amount) {
            return console.log(`Снятие ${amount} не возможно, недостаточно стредств!`);;
        }

        this.balance -= amount;
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));

        return console.log(`Сумма ${amount} успешно снята, текущий баланс ${this.balance}.`);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return console.log(`Ваш текущий баланс ${this.balance}.`);
    },

    /*
     * Метод возвращает историю транзакций 
     */
    getTransaction() {
        return console.table(this.transactions);
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const trans of this.transactions) {
            if (trans.id === id) {
                return console.log('Информация по вашей транзакции: ', trans);
            }
        }

        return console.log(`Такого id не существует!`);
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;

        for (const trans of this.transactions) {
            if (trans.type === type) {
                total += trans.amount;
            } 
        }

        return console.log(`Кол-во средств за всю историю транзакций ${type} - ${total}.`);
    },
  };
  

  account.deposit(10000);
  account.deposit(1200);
  account.withdraw(2000);
  account.withdraw(3240);
  account.deposit(1780);
  account.withdraw(740);
  account.getBalance();
  account.getTransaction();
  account.getTransactionDetails(3);
  account.getTransactionTotal("deposit");
  account.getTransactionTotal("withdraw");



   