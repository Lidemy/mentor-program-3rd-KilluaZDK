const q = element => document.querySelector(element);
const qAll = element => document.querySelectorAll(element);

// 驗證 text 類型的 input
const validateText = (el) => {
  const isRequired = el.classList.contains('required');
  const resValue = el.querySelector('.responses').value;
  if (isRequired && !resValue) {
    el.classList.add('warning-bg');
    el.querySelector('.responses').classList.add('warning-input-redline');
    el.querySelector('.warning-text').classList.remove('hide');
    return false;
  }
  if (isRequired && resValue) {
    el.classList.remove('warning-bg');
    el.querySelector('.responses').classList.remove('warning-input-redline');
    el.querySelector('.warning-text').classList.add('hide');
    return true;
  }
  return true;
};

// 驗證 checkbox 類型的 input
const validateCheckbox = (el) => {
  const isRequired = el.classList.contains('required');
  const checkedNodes = el.querySelectorAll('.form__option');
  const checkedArr = Array.from(checkedNodes).filter((element) => {
    const checkbox = element.querySelector('.form__option-checkbox');
    return checkbox.checked;
  });
  if (isRequired && checkedArr.length === 0) {
    el.classList.add('warning-bg');
    el.querySelector('.warning-text').classList.remove('hide');
    return false;
  }
  if (isRequired && checkedArr.length) {
    el.classList.remove('warning-bg');
    el.querySelector('.warning-text').classList.add('hide');
    return true;
  }
  return true;
};

// text 類型的 input : focus / blur
qAll('.responses').forEach((element) => {
  element.addEventListener('focus', () => {
    element.classList.add('input-focus');
  });
  element.addEventListener('blur', () => {
    element.classList.remove('input-focus');
    // 驗證必填
    validateText(element.parentNode);
  });
});

// checkbox 類型的點擊
qAll('.form__option').forEach((element) => {
  element.addEventListener('click', () => {
    // 驗證必填
    validateCheckbox(element.parentNode);
  });
});

// 按送出
q('.submit').addEventListener('click', (e) => {
  e.preventDefault();

  const checkRequired = [];

  // 檢查問題 && 印出
  qAll('.question').forEach((element) => {
    // 如果是 text 類型的 input
    if (element.classList.contains('inputText')) {
      const question = element.querySelector('.subtitle').textContent;
      const answer = element.querySelector('.responses').value;

      const result = validateText(element);
      if (answer) {
        console.log(`${question}：${answer}`);
      }
      checkRequired.push(result);
    }

    // 如果是 checkbox 類型的 input
    if (element.classList.contains('checkbox')) {
      const question = element.querySelector('.subtitle').textContent;
      element.querySelectorAll('.form__option-checkbox').forEach((option) => {
        const opt = option;
        opt.value = element.querySelector('.form__option-text').textContent;
        if (opt.checked) {
          console.log(`${question}：${opt.value}`);
        }
      });

      const result = validateCheckbox(element);
      checkRequired.push(result);
    }
  });

  // 檢查是否送出表單
  const isAllFillIn = checkRequired.every(item => item);
  if (!isAllFillIn) {
    return;
  }

  alert('表單已送出！');
});
