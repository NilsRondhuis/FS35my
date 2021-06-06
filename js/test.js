// const btnAdd = document.querySelector('.btn');
// const btnRes = document.querySelector('.btn[data-reset]');
// const valueAdd = document.querySelector('[data-value]');
// const outputEl = document.querySelector('.js-output span');

// let total = 0;

// btnAdd.addEventListener('click', function () {
//     console.log('click');
//     const value = Number(valueAdd.value);
//     console.log(value);

//     total += value;
//     outputEl.textContent = total;

//     valueAdd.value = '';
// });

// btnRes.addEventListener('click', () => {
//     total = 0;
//     outputEl.textContent = 0;
// })
// ---------------------------------------------------------


function checkForSpam(message) {
    let result;
    // Change code below this line
    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
    // Change code above this line
    return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));


