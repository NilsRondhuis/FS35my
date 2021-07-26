// форма

// const refs = {
//     form: document.querySelector('.form'),
//     input: document.querySelector('.input'),
// };

// refs.form.addEventListener('submit', getDataServer);

// function getDataServer(e) {
//     e.preventDefault();
//     console.log(refs.input.value);
// };


// счетчик
// const [decrementBtn, value, incrementBtn] =    //дестр массива
// document.querySelector('#counter').children;

// function decrement() {
//     value.textContent -= 1;
// };

// function increment() {
//     // let num = +value.textContent;
//     // num += 1;
//     // value.textContent = num;
//     value.textContent ++;
// };

// decrementBtn.addEventListener('click', decrement);
// incrementBtn.addEventListener('click', increment);


// Сделать фиксированый скролл на странице для меню

// 1) постичтать размер хедера
// 2) Отследить позицию скролла
// 3) добавлять клас если скрол больше высоты хедера

const refs = {
    header: document.querySelector('.header'),
    nav: document.querySelector('.nav'),
};

console.log(refs.header.clientHeight); // высота хедера
console.log(refs.header.clientWidth); // ширина хедера

function toggleMenu() {
    if (pageYOffset > refs.header.clientHeight) {
        refs.nav.classList.add('fixed-nav');
    } else {
        refs.nav.classList.remove('fixed-nav');
    }
};

window.addEventListener('scroll', toggleMenu);

