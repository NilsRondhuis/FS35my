import refs from './refs';
import serverData from '../data/serverData';
import listTemlate from '../templates/questions.hbs';


export function submitHandler(e) {
    e.preventDefault();
    const value = refs.input.value;
    serverData.push(value);
    refs.input.value = '';

    const markup = listTemlate(serverData);
    refs.root.innerHTML = markup;
}