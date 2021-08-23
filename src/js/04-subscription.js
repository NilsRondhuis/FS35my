import '../css/common.css';
import BSN from 'bootstrap.native';

const modal = new BSN.Modal('#subscription-modal');
console.log(modal);

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribe: document.querySelector('button[data-subscribe]'),
}

const PROMPT_DELAY = 1000;
const MAX_PROMTP_ATTEMPRTS = 3;
let promptCounter = 0;
let hassSubscribet = false;

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribe.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMTP_ATTEMPRTS || hassSubscribet) {
    return;
  }

  setTimeout(() => {
    promptCounter += 1;
    console.log('Открылась модалка');
    modal.show();
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hassSubscribet = true;
  modal.hide();
}






// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMTP_ATTEMPRTS) {
//     console.log('Stop interval');
//     clearInterval(intervalId);
//     return;
//   }

//   console.log("Подпишись на рассылку! - " + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY)
