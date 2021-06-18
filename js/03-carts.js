/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],

    // Показывает и возврощает товары в корзине
    getItems() {
        return console.table(this.items);
    },

    // Добавляет товары в корзину
    add(product) {
        const newProduct = {
            ...product,
            quantity: 1,
        };
        
        for (const item of this.items) {
            
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        this.items.push(newProduct);
    },

    // Удаляет товар из корзины
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            
            if (items[i].name === productName) {
                items.splice(i, 1);
            }
        }
    },

    // Кнопка "очистить корзину"
    clear() {
        this.items = [];
    },

    // Считает общую цену всех товаров
    countTotalPrice() {
        let total = 0;

        for (const { price, quantity } of this.items) {
            total += price * quantity;
        }

        return console.log(`Общая сумма всех товаров ${total}.`);
    },

    // Увеличивает на 1 кол-во
    increaseQuantity(productName) {

        for (let item of this.items) {
            if (item.name === productName) {
                item.quantity += 1;
            }
        }
    },

    // Уменьшает на 1 кол-во
    decreaseQuantity(productName) {
        for (let item of this.items) {
            
            if (item.name === productName && item.quantity !== 1) {
                return item.quantity -= 1;
            }
            // if (item.quantity === 0) {
            //     for (let i = 0; i < this.items.length; i += 1) {
            //         return this.items.splice(i, 1);
            //     }
            // }
        }
    },
};
  
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

cart.getItems();
cart.countTotalPrice();

// cart.remove('🍇');
// cart.clear();

cart.increaseQuantity('🍇');
cart.increaseQuantity('🍇');
cart.increaseQuantity('🍓');

cart.decreaseQuantity('🍇');

cart.remove('🍋');


cart.getItems();
cart.countTotalPrice();


  

