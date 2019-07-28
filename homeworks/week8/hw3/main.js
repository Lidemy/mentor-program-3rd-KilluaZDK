const q = element => document.querySelector(element);

const url = 'https://api.twitch.tv/kraken/streams/';
const game = 'League%20of%20Legends';
const limit = '20';
const clientId = 'kpxbkxym32vgp4bv6qrrwpc564eqq4';

const createStreamDom = (el) => {
  const element = document.createElement('div');
  element.classList.add('live__wrapper');
  element.innerHTML = `
    <div class='live__picture'>
      <img src='${el.preview.medium}'/>
    </div>
    <div class='live__user'>
      <img src='${el.channel.logo}'/>
      <div class='live__user-inform'>
        <div class='user__inform-title'>${el.channel.status}</div>
        <div class='user__inform-subtitle'>${el.channel.display_name}</div>
      </div>
    </div>`;
  return element;
};

fetch(`${url}?game=${game}&limit=${limit}&client_id=${clientId}`)
  .then(res => res.json())
  .then((res) => {
    q('.main__wrapper').innerHTML = '';
    res.streams.forEach((stream) => {
      const streamDom = createStreamDom(stream);
      q('.main__wrapper').appendChild(streamDom);
    });
  })
  .catch((err) => {
    console.log(err);
    alert('系統不穩定，請再試一次');
  });
