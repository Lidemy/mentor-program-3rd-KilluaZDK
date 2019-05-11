const request = require('request');

function callback(error, response, body) {
  const res = JSON.parse(body);
  for (let i = 0; i <= 9; i += 1) {
    console.log(`${res[i].id} ${res[i].name}`);
  }
}

request.get('https://lidemy-book-store.herokuapp.com/books?_limit=10', callback);
