// болтливые resize, scroll

// window.addEventListener('resize', _.throttle(onResize, 1000));

// function onResize(event) {
//     console.log(event.target);
//     console.log(event.target.innerHeight);
//     console.log(event.target.innerWidth);
// };


// input и _.debounce

// const inputEl = document.querySelector('input');

// inputEl.addEventListener('input', _.debounce(onChangeInput, 500));

// function onChangeInput(event) {
//     console.log(event.target.value);
// };



// Intersection Observer API
// Анимированый текст
// const targetEl = document.querySelector('.animated-text');

// function callback (entries, observer) {
//     console.log('entries', entries);
//     // console.log('observer', observer);
//     entries.forEach(el => {
//         if (el.isIntersecting) {
//             targetEl.classList.add('visible');
//         } else {
//             targetEl.classList.remove('visible');
//         }
//     });
// };

// const wather = new IntersectionObserver(callback, { threshold: 1 });

// wather.observe(targetEl);


// Написать сайт на котором при загрузке проигрвывается видео. Как только видео пропадает
// из области видимостя более чем на 60% - ставить его на паузу
const videoEl = document.querySelector('video'); // 1) получить доступ

const wather = new IntersectionObserver(handleVideoObserver, { threshold: 1 }); //2) создать передать каллбек и опции

wather.observe(videoEl); //3) поставить наблюдателя за целевым елементом

function handleVideoObserver() {  //местро параметров исп перем из глоб обл видим
    if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
};



