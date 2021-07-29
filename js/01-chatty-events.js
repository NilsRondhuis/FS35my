/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */

// const mouseEvent = document.querySelector('.js-coords');

// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 500));


// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     mouseEvent.textContent = `Кол-во вызовов onMouseMove ${mouseMoveCbInvocationCounter},
//     X ${event.clientX},
//     Y ${event.clientY}`;
// };


/*
 * Input и debounce
 */

const inputRef = document.querySelector('.js-input');
const textRef = document.querySelector('.js-output');

let inputMoveCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputMove, 500));

function onInputMove(event) {
    inputMoveCbInvocationCounter += 1;

    textRef.textContent = `Кол-во вызовов onInputChange: ${inputMoveCbInvocationCounter},
    Значение: ${event.target.value}`;

    if (event.target.value === '') {
        textRef.textContent = `Кол-во вызовов onInputChange: ${0}`;
    }
};