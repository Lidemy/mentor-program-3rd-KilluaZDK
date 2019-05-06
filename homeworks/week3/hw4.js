function isPalindromes(str) {
  const reStr = str.split('').reverse().join('');
  return str === reStr;
}

module.exports = isPalindromes;
