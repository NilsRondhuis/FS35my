import "./styles/style.css";
// import simpleTemplate from'./templates/simple.hbs';
// import { base, list } from './data/hbsData.js';
// import listTemplate from './templates/list.hbs';

// const markup = simpleTemplate(base);
// const listMarkup = listTemplate(list);

// document.body.insertAdjacentHTML('beforeend', markup);
// document.body.insertAdjacentHTML('beforeend', listMarkup);

import refs from './js/refs';
import { submitHandler } from './js/handlers';
import listTemlate from './templates/questions.hbs';
import serverData from './data/serverData';

const markup = listTemlate(serverData);

refs.form.addEventListener('submit', submitHandler);
refs.root.insertAdjacentHTML('beforeend', markup);











