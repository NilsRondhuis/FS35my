const player = {
    name: 'Sergio',
    team: 'PSG',
};
// console.log(JSON.stringify(player));  // делает строку

// const string = '{"name":"Sergio","team":"PSG"}'; 
// console.log(JSON.parse(string)); // делает обьект

console.log(localStorage);

localStorage.setItem('my-data', JSON.stringify(player));

const saveData = localStorage.getItem('my-data');

const parseData = JSON.parse(saveData);

console.log(parseData);
