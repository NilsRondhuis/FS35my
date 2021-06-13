  /*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 * -------------------------------------------
 *  * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */


// const playlist = {
//     name: 'Playlist',
//     rating: 5,
//     tracks: ['trakc-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const propertyName = 'tracks';

// console.log(playlist.name);
// console.log(playlist[propertyName]);


/*
 * Короткая запись свойств
 */

const username = 'Mango';
const email = 'mango@mail.com';
const player = 'Messi';

const signupData = {
    player,
    username,
    email: email,
};

console.log(signupData);


/* 
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};
