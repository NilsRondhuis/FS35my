const counter = {
    value: 0,
    increment () {
        this.value += 1;
    },
    decrement () {
        this.value -= 1;
    }
};


const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-number');


incrementBtn.addEventListener('click', () => {
    console.log('click increment');

    counter.increment();
    console.log(counter);

    valueEl.textContent = counter.value;
});


decrementBtn.addEventListener('click', function () {
    console.log('click decrement');

    counter.decrement();
    console.log(counter);

    valueEl.textContent = counter.value;
})