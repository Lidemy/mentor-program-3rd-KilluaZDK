const q = element => document.querySelector(element);

const operatorArr = ['divide', 'multiply', 'minus', 'plus'];

const operators = {
  '+': (accumulator, currentValue) => parseInt(accumulator, 10) + parseInt(currentValue, 10),
  '-': (accumulator, currentValue) => parseInt(accumulator, 10) - parseInt(currentValue, 10),
  '*': (accumulator, currentValue) => parseInt(accumulator, 10) * parseInt(currentValue, 10),
  '/': (accumulator, currentValue) => parseInt(accumulator, 10) / parseInt(currentValue, 10),
};

let operator = '';

// 計算機中的數字
const setResult = (str) => {
  q('.result').innerText = str;
};

const appendResult = (str) => {
  const resultText = q('.result').textContent;
  const isInit = q('.result').textContent === '0';

  if (resultText.length > 12) {
    return;
  }

  if (isInit) {
    setResult(str);
  } else {
    q('.result').innerText += str;
  }
};

const appendOperator = (e) => {
  const resultText = q('.result').textContent;
  const lastLetter = resultText[resultText.length - 1];
  const value = e.target.textContent;

  if (q('.result').textContent === '0' || lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/') {
    return;
  }

  appendResult(value);
  operator = value;
};

for (let i = 0; i <= 9; i += 1) {
  q(`.number${i}`).addEventListener('click', () => {
    appendResult(i);
  });
}

for (let i = 0; i < operatorArr.length; i += 1) {
  q(`.${operatorArr[i]}`).addEventListener('click', appendOperator);
}

// 按AC後歸零
q('.ac').addEventListener('click', () => {
  setResult('0');
});

// 顯示答案
q('.equal').addEventListener('click', () => {
  const resultText = q('.result').textContent;
  const numArr = resultText.split(operator);
  const ans = numArr.reduce(operators[operator]);
  setResult(ans);
});
