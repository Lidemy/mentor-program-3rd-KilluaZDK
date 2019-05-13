const request = require('request');
const process = require('process');

const callback = (error, response, body) => {
  const res = JSON.parse(body);
  console.log(res);
};

if (process.argv[2] === 'list') {
  request.get('https://lidemy-book-store.herokuapp.com/books?_limit=20', callback);
}

if (process.argv[2] === 'read') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, callback);
}

if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, callback);
}

if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
    callback,
  );
}

if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    },
    callback,
  );
}
