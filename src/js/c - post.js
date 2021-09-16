const BASE_URL = 'http://localhost:4040';

const newBook_1 = {
  title: 'Метро 2033',
  author: 'Дмитрий Глуховский',
  genres: ['фантастика', 'ужасы'],
  rating: 10,
}

const newBook_2 = {
  title: 'Метро 2034',
  author: 'Дмитрий Глуховский',
  genres: ['фантастика', 'ужасы'],
  rating: 10, 
}

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }
  
  fetch(`${BASE_URL}/books`, options).then(res => res.json()).then(console.log);
}

addBook(newBook_1);
addBook(newBook_2);