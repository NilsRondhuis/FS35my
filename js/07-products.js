import products from './data/products.js';
console.log(products);
/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

// const product = {
//     name: 'Сервоприводы',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas odit commodi, expedita magnam odio, molestiae fuga suscipit omnis assumenda provident nostrum!',
//     price: 2000,
//     available: true,
//     onSale: true,
// }

{
    /*
  <article class="product">
    <h2 class="product__name">Название</h2>
    <p class="product__descr">Описание</p>
    <p product__pridct>Цена: 1111 кредитов</p>
  </article>
  */
}

// const productEl = document.createElement('article');
// productEl.classList.add('product')

// const titleEl = document.createElement('h2');
// titleEl.classList.add('product__name');
// titleEl.textContent = product.name;

// const descEl = document.createElement('p');
// descEl.classList.add('product__descr');
// descEl.textContent = product.description;

// const priceEl = document.createElement('p');
// priceEl.classList.add('product__price');
// priceEl.textContent = `Цена ${product.price} кредитов`;

// productEl.append(titleEl, descEl, priceEl);

// document.body.append(productEl);



/*
 * Пишем функцию для создания карточки продукта
 */

const productContainerEl = document.querySelector('.js-products');

const makeProduct = ({ name, description, price}) => { // деструктуризация опять же!!!
        const productEl = document.createElement('article');
        productEl.classList.add('product')

        const titleEl = document.createElement('h2');
        titleEl.classList.add('product__name');
        titleEl.textContent = name;

        const descEl = document.createElement('p');
        descEl.classList.add('product__descr');
        descEl.textContent = description;

        const priceEl = document.createElement('p');
        priceEl.classList.add('product__price');
        priceEl.textContent = `Цена ${price} кредитов`;

        productEl.append(titleEl, descEl, priceEl); //виноград

        return productEl;
};

const result = products.map(makeProduct);

productContainerEl.append(...result);
