const request = require('request');

const callback = (error, response, body) => {
  const res = JSON.parse(body);
  const { data } = res;
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].id} ${data[i].name}`);
  }
};

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'kpxbkxym32vgp4bv6qrrwpc564eqq4',
  },
};

request.get(options, callback);
