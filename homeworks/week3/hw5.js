function add(a, b) {
  let toAdd = 0;
  let answer = '';
  for (let i = 1, j = 1; a.length - i >= 0 || b.length - j >= 0 || toAdd; i += 1, j += 1) {
    const tmp = toAdd + parseInt(a[a.length - i] || 0, 10) + parseInt(b[b.length - i] || 0, 10);
    if (tmp < 10) {
      answer = tmp + answer;
      toAdd = 0;
    } else {
      answer = (tmp - 10) + answer;
      toAdd = 1;
    }
  }
  return answer;
}

module.exports = add;
