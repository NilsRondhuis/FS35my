import serverLs from '../data/dataInfo';
import refs from './refs';

const LOCAL_STORAGE = 'task-info';

// export function onSubmit(e) {
//     e.preventDefault();
//     const value = refs.input.value;

//     if (value !== "") {
//         serverLs.dataBase.push(value);
//     }
    
//     localStorage.setItem(LOCAL_STORAGE, JSON.stringify(serverLs.dataBase));
//     const getStringLs = localStorage.getItem(LOCAL_STORAGE);
//     const parseStringLs = JSON.parse(getStringLs);

//     const result = createEl(parseStringLs);
//     if (value !== "") {
//         refs.root.innerHTML = result.join('');
//     }
//     e.currentTarget.reset();
// }

// export function createEl(element) {
//     return element.map(task => {

//         return `<li>${task}</li>`;
//     });
// }
const createEl = (text) => `<li>${text}</li>`;

const storageCollection = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
const dataFromStorage = storageCollection ? storageCollection : [];
const result = dataFromStorage.map(string => createEl(string));
const markup = result.join("");
refs.root.insertAdjacentHTML('afterbegin', markup);

export function onSubmit(e) {
    e.preventDefault();
    const value = refs.input.value;
    refs.root.insertAdjacentHTML('beforeend', createEl(value));

    const array = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    const arrayForStorage = array ? array : [];
    arrayForStorage.push(value);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(arrayForStorage));
    e.currentTarget.reset();
}

