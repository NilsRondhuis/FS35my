const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json(); // можно ставить аваит можно нет, но лучше ставить
//     return data;
// }
// getData(BASE_URL).then(data => console.log(data));

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

getData(BASE_URL)