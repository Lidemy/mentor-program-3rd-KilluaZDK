const q = element => document.querySelector(element);

const createMessageDom = (data) => {
  const element = document.createElement('div');
  element.classList.add('board__message');
  element.innerHTML = `
    <div class='board__message-number'>${data.id}</div>
    <div class='board__message-content'>${data.content}</div>
  `;
  return element;
};

// 顯示區
window.addEventListener('load', () => {
  // get posts
  fetch('https://lidemy-book-store.herokuapp.com/posts?_limit=20&_order=desc&_sort=id')
    .then(res => res.json())
    .then((res) => {
      q('.board__view').innerHTML = '';

      // render posts
      res.forEach((el) => {
        const messageEle = createMessageDom(el);
        q('.board__view').appendChild(messageEle);
      });
    })
    .catch((err) => {
      console.log(err);
      alert('系統不穩定，請再試一次');
    });
});

// 按下「送出」鍵
q('.board__input-submit').addEventListener('click', () => {
  const inputValue = q('#input-area').value;

  // 防止送出空白
  if (inputValue === '') {
    return;
  }

  const data = {
    content: inputValue,
  };

  // add post
  fetch('https://lidemy-book-store.herokuapp.com/posts', {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
    .then((res) => {
      // render new post
      const messageEle = createMessageDom(res);
      q('.board__message').before(messageEle);
    })
    .catch((err) => {
      console.log(err);
      alert('系統不穩定，請再試一次');
    });

  // 清空輸入區
  q('#input-area').value = '';
});
