const q = element => document.querySelector(element);

let startTime = 0;
let endTime = 0;
let elapsedTime = 0;
let hue = 0;

let isStart = false;
let isTiming = false;

// 重新開始遊戲
const resetGame = () => {
  isStart = false;
  isTiming = false;
  q('.button').classList.remove('hide');
  q('.button').innerText = 'TRY AGAIN >>';
};

// 排行榜
const rankingArr = [];
const setRanking = (score) => {
  rankingArr.push(score);
  rankingArr.sort((a, b) => a - b);
  q('.score').innerText = '';
  for (let i = 0; i < 3; i += 1) {
    console.log(i, rankingArr[i]);
    if (rankingArr[i]) {
      const element = document.createElement('div');
      element.innerText = `No.${i + 1} ${rankingArr[i]}`;
      q('.score').appendChild(element);
    }
  }
};

// 按下 START 鍵，開始遊戲
q('.button').addEventListener('click', (e) => {
  e.stopPropagation();
  // 按下 START 後將按鈕隱藏起來
  q('.button').classList.add('hide');
  isStart = true;
  // 背景在 1~3 秒後，隨機變色
  const ms = (Math.random() * 2 + 1) * 1000;
  window.setTimeout(() => {
    if (!isStart) return;
    hue += Math.floor(Math.random() * 50 + 50);// 避免變成重複的顏色，或是和前一個背景太接近的顏色。
    q('body').style.background = `hsl(${hue}, 55%, 75%)`;
    isTiming = true;
    startTime = Date.now();
  }, ms);
});

// 按下 START 鍵後，點擊畫面
q('body').addEventListener('click', () => {
  // 背景變色後，點擊畫面
  if (isStart && isTiming) {
    endTime = Date.now();
    elapsedTime = (endTime - startTime) / 1000;
    alert(`你的成績：${elapsedTime} 秒`);
    setRanking(elapsedTime);
    resetGame();
  // 背景還沒變色，點擊畫面
  } else if (isStart && !isTiming) {
    alert('急屁');
    resetGame();
  }
});
