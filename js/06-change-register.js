/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// 1) Написать Ф
// 2) Создать переменную где будет переведена строка в массив
// 3) Перебрать массив
// 4) Создать переменную куда будет записыватся новая строка
// 5) Написать тернарный оператор на сравнение условий и приплюсовать его в новую строку

const changeCase = string => {
    const letter = string.split('');
    console.log(letter);
    let inverseString = '';

    for (const value of letter) {
        inverseString += value === value.toLowerCase() ? 
        value.toUpperCase() 
        : value.toLowerCase();
    }

    return inverseString;
}



console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX