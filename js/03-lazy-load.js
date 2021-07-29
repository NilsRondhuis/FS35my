/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

console.log(lazyImages);

lazyImages.forEach(images => {
    images.addEventListener('load', imagesLoaded, { once: true }); // после срабатывание снимает регистрацию
});

function imagesLoaded(event) {
    event.target.classList.add('appear');
    // console.log(event.target);
};