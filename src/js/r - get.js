const BASE_URL = 'http://localhost:4040/books';

const fetchBooks = (id) => {
  fetch(`${BASE_URL}/${id}`)
  .then(res => res.json())
  .then(console.log)
}

fetchBooks(3)
