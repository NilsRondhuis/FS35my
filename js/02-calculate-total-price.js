/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

const calculateTotalPrice = (items) => {
    let total = 0;

    for (const item of items) {
        total += item;
    }

    return total;
}

const r1 = calculateTotalPrice([2, 1, 3]);

console.log(r1); // 6
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600