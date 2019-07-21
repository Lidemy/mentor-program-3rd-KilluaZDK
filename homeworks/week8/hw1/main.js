const q = element => document.querySelector(element);

const getPrizeText = (prize) => {
  switch (prize) {
    case 'FIRST':
      return '恭喜你中頭獎了！日本東京來回雙人遊！';
    case 'SECOND':
      return '二獎！90 吋電視一台！';
    case 'THIRD':
      return '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
    case 'NONE':
      return '銘謝惠顧';
    default:
      return false;
  }
};

const getPrizePic = (prize) => {
  switch (prize) {
    case 'FIRST':
      return '<img src="./airplane.png" />';
    case 'SECOND':
      return '<img src="./tv.png" />';
    case 'THIRD':
      return '<img src="./youtube.png" />';
    default:
      return false;
  }
};

// 按下「開始抽獎」
q('.button').addEventListener('click', () => {
  // 按下「開始抽獎」後將按鈕隱藏
  q('.button').classList.add('hide');

  // call API 後並隨機出獎
  fetch('https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery')
    .then(res => res.json())
    .then((res) => {
      const textEle = document.createElement('div');
      textEle.classList.add('result_text');
      textEle.innerText = getPrizeText(res.prize);

      const picEle = document.createElement('div');
      picEle.classList.add('result_pic');
      picEle.innerHTML = getPrizePic(res.prize);

      switch (res.prize) {
        case 'FIRST':
          q('.result').innerHTML = '';
          q('.result').appendChild(textEle);
          q('.result').appendChild(picEle);
          q('.main').classList.add('bg_blue');
          break;
        case 'SECOND':
          q('.result').innerHTML = '';
          q('.result').appendChild(textEle);
          q('.result').appendChild(picEle);
          break;
        case 'THIRD':
          q('.result').innerHTML = '';
          q('.result').appendChild(textEle);
          q('.result').appendChild(picEle);
          break;
        case 'NONE':
          q('.result').innerHTML = '';
          q('.result').appendChild(textEle);
          q('.main').classList.add('bg_black');
          q('.result_text').classList.add('word_white');
          break;
        default:
          alert('系統不穩定，請再試一次');
      }
    })
    .catch(() => {
      alert('系統不穩定，請再試一次');
    });
});
