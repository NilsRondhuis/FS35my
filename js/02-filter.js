const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
  ];
  
  /*
   * 1. Рендерим разметку элементов списка
   * 2. Слушаем изменение фильтра
   * 3. Фильтруем данные и рендерим новые элементы
   */

const refs = {
    inputEl: document.querySelector('#filter'),
    ulEl: document.querySelector('.js-list'),
};

refs.inputEl.addEventListener('input', onFilterChange);

const listItemsMarkup = createListItemsMarkup(tech);

// refs.ulEl.innerHTML = listItemsMarkup;
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
};

function onFilterChange(event) {
    const filter = event.target.value.toLowerCase();
   
    const filteredItems = tech.filter(el => el.label.toLowerCase().includes(filter));

    const filteredEl = createListItemsMarkup(filteredItems);
    
    // refs.ulEl.innerHTML = filteredEl;  // нужно избегать повторений
    populateList(filteredEl);
};

function populateList(items) {
    refs.ulEl.innerHTML = items;
};