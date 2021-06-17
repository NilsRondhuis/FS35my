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
    getItems() {
        return this.items;
    },
    add(product) {
        this.items.push(product);
        return this.items;
    },
    remove(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            let prod = this.items[i].name;

            if (prod === productName) {
                this.items.splice(i, 1);
            }
        }

        return this.items;
    },
    clear() {
        return this.items.splice();
    },
    countTotalPrice() {
        let total = 0;

        for (const item of this.items) {
            total += item.price;
        }

        return total;
    },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.price *= 2;
            }
        }

        return this.items;
    },
    decreaseQuantity(productName) {},
};

console.log(cart.add({ name: '🍎', price: 50 }));
console.log(cart.add({ name: '🍇', price: 70 }));
console.log(cart.add({ name: '🍋', price: 60 }));
console.log(cart.add({ name: '🍓', price: 110 }));

console.table(cart.getItems());

// console.log(cart.clear());

// console.log(cart.remove('🍇'));

console.log(cart.countTotalPrice());

console.log(cart.increaseQuantity('🍇'));
console.log(cart.increaseQuantity('🍇'));

console.log(cart.countTotalPrice());

console.table(cart.getItems());











// const obj = {
//     items: [
//         { name: '🍎', price: 50 },
//         { name: '🍇', price: 70 },
//         { name: '🍋', price: 60 },
//         { name: '🍓', price: 110 },
//     ],
//     getItems() {
//         return this.items;
//     },
//     iterItems() {
//         for (const item of this.items) {
//             console.log(item);
//         }
//     },
//     removeItems(product) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             let prod = this.items[i].name;

//             if (prod === product) {
//                 this.items.splice(i, 1);
//             }
//         }

//         return this.items;
//     }
// }

// console.table(obj.getItems());

// // console.log(obj.iterItems());

// console.log(obj.removeItems('🍋'));







