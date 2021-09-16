const BASE_URL = 'http://localhost:4040';

function deleteBook(id) {
  const options = {
    method: 'DELETE',
  }

  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
}

deleteBook(20).then(console.log)

