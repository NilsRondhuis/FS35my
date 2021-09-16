const BASE_URL = 'http://localhost:4040';

const newTitle = {
  title: 'Пожиратель мозгов',
}

function updateBookById(update, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  }
  
  
  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
}

updateBookById({ title: 'Два солнца' }, 5).then(console.log)
