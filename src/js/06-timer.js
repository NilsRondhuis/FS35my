import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});
refs.stopBtn.addEventListener('click', () => {
  timer.stop();
})

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }
  
  start() {
    if (this.isActive) {
      return;
    } 
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);

      this.onTick(time)
    }, 1000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
  
}

const timer = new Timer({ onTick: updateClockface });




/*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со стека 💩
*/
function getTimeComponents(time) {
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}


/*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
*/
function pad(value) {
  return String(value).padStart(2, '0');
}

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейс
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}


// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     } 
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getTimeComponents(deltaTime);

//       updateClockface(time);
//     }, 1000)
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   }
// };