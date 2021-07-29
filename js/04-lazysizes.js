/*
 * Библиотека lazysizes
 * - feature detection
 */

if ('loading' in HTMLImageElement.prototype) {
    // supported in browser

    const lazyImages = document.querySelectorAll('[data-src]');

    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // fetch polyfill/third-party library

    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
}


const lazyImages = document.querySelectorAll('[data-src]');

console.log(lazyImages);

lazyImages.forEach(images => {
    images.addEventListener('load', imagesLoaded, { once: true }); // после срабатывание снимает регистрацию
});

function imagesLoaded(event) {
    event.target.classList.add('appear');
    // console.log(event.target);
};

