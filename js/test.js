//1 получить доступ к елементам

// const refs = {
//     form: document.querySelector('.form'),
//     price: document.querySelector('#price'),
//     inputText: document.querySelector('#price'),
//     amount: document.querySelector('.amount'),
//     inputRange: document.querySelector('#quantity'),
//     total: document.querySelector('.total'),
//     btn: document.querySelector('.btn'),
// };

// console.log(refs);

// function calculate (event) {
//     event.preventDefault();
//     const price = refs.price.value;
//     const quantity = refs.inputRange.value;
//     const total = price * quantity;
//     refs.total.textContent = `${total.toFixed(2)} грн`;
//     // refs.amount.textContent = quantity;
// };

// function onChangeQuantity () {
//     refs.amount.textContent = refs.inputRange.value;
// }


// refs.form.addEventListener('submit', calculate);
// refs.inputRange.addEventListener('input', onChangeQuantity);
// window.addEventListener('DOMContentLoaded', calculate);



// баловство
const refs = {
    form: document.querySelector('[action="#"]'),
    input: document.querySelector('[type="text"]'),
    button: document.querySelector('[type="submit"]'),
};

console.log(refs);


function onChangeEl (event) {
    event.preventDefault();
    const pEl = document.createElement('p');
    pEl.textContent = refs.input.value;
    refs.form.append(pEl);
};

refs.form.addEventListener('submit', onChangeEl);











