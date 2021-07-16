/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

// const resultBtn = colorPickerOptions.map(option => {
//     const btnEl = document.createElement('button');
//     btnEl.type = 'submit';
//     btnEl.classList.add('js-color-peak');
//     btnEl.textContent = option.label;
//     btnEl.style.backgroundColor = option.color;

//     return btnEl;
// });

// console.log(resultBtn);

// document.body.append(...resultBtn);


/*
 * Пишем функцию для создания разметки колорпикера
 */

const makeColorPeackerOptions = (options) => {
    return options.map(option => {
        const btnEl = document.createElement('button');
        btnEl.type = 'submit';
        btnEl.classList.add('js-color-peak');
        btnEl.textContent = option.label;
        btnEl.style.backgroundColor = option.color;
    
        return btnEl;
    });
};

const result = makeColorPeackerOptions(colorPickerOptions);

document.body.append(...result);


