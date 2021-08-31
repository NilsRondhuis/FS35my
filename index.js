class StopWatch {
    constructor() {
        this.refs = {
            start: document.querySelector('#start'),
            stop: document.querySelector('#stop'),
            sec: document.querySelector('.seconds'),
            min: document.querySelector('.minutes'),
        };
        this.id = null;
        this.startDate = null;

        this.calc = this.calc.bind(this);
        // привязка контекста через бинд
    }

    calc() {
        const currentDate = Date.now();
        const delta = currentDate - this.startDate;
        // const delta = (currentDate - startDate) / 1000;
        const sec = Math.floor(delta / 1000 % 60);
        const min = Math.floor(delta / 1000 / 60).toString();
        this.refs.sec.textContent = sec < 10 ? '0' + sec : sec;
        this.refs.min.textContent = min < 10 ? min.padStart(2, '0') : min;
    }

    timerStart = () => {
        this.startDate = Date.now();
        this.id = setInterval(this.calc, 1000);
    }

    timerStop = () => {
        clearInterval(this.id);
    }

    init () {
        this.refs.start.addEventListener('click', this.timerStart);
        this.refs.stop.addEventListener('click', this.timerStop);
    }
};


const watch = new StopWatch();
watch.init();


// const refs = {
//     start: document.querySelector('#start'),
//     stop: document.querySelector('#stop'),
//     sec: document.querySelector('.seconds'),
//     min: document.querySelector('.minutes'),
// };

// 1) Фиксировать дату старта
// 2) Считать сколько времени прошло от старта

// let id = null;
// let startDate = null;

// function calc () {
//     const currentDate = Date.now();
//     const delta = currentDate - startDate;
//     // const delta = (currentDate - startDate) / 1000;
//     const sec = Math.floor(delta / 1000 % 60);
//     const min = Math.floor(delta / 1000 / 60).toString();
//     refs.sec.textContent = sec < 10 ? '0' + sec : sec;
//     refs.min.textContent = min < 10 ? min.padStart(2, '0') : min;
// }

// function timerStart() {
//     startDate = Date.now();
//     id = setInterval(calc, 1000);
// }

// function timerStop() {
//     clearInterval(id);
// }

