import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

let raceCounter = 0;

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField('');
  updateProgressField('🤖 Заезд начался, ставки не принимаются!');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time} времени`);
    updateResultTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField('📝 Заезд окончен, принимаются ставки.');
  });
}

function updateWinnerField(msg) {
  refs.winnerField.textContent = msg;
}

function updateProgressField(msg) {
  refs.progressField.textContent = msg;
}

function updateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500)

    setTimeout(() => {
      resolve({horse, time})
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// run('Ajax')
// .then(x => console.log(x))
// .catch(x => console.log(x))

// const promises = horses.map(run);
/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */
// Promise.race(promises).then(({ horse, time }) => {
//   console.log(`🎉 Победил ${horse}, финишировав за ${time} времени`);
// });

/*
 * Promise.all([]) для ожидания всех промисов
 */
// Promise.all(promises).then(() => {
//   console.log('📝 Заезд окончен, принимаются ставки.');
// });
