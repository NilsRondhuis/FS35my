/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardsTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  // console.log(form.elements.query.value);  // получить инпут можно и так
  
  const id = refs.input.value;
  API.fetchPokemon(id)
  .then(renderPokemonCard)
  .catch(error => console.log('Ошибка', error))
  .finally(() => {
    form.reset();
  });
  // refs.input.value = "";
}

API.fetchPokemon(1).then(renderPokemonCard).catch(error => console.log(error));

function renderPokemonCard(pokemon) {
  const markup = pokemonCardsTpl(pokemon);
  refs.card.innerHTML = markup;
}




//==============================

// Параметри запроса a9180199410b777ec9cb71c1c9e5cc53
// погода

// const url = 'http://api.weatherstack.com/current?access_key=a9180199410b777ec9cb71c1c9e5cc53&query=Bila-Tserkva';

// fetch(url)
// .then(response => response.json())
// .then(console.log)
