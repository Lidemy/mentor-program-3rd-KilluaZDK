function alphaSwap(str) {
  let newStr = '';
  const upperStr = str.toUpperCase();
  for (let i = 0; i < str.length; i += 1) {
    newStr += str[i] === upperStr[i] ? str[i].toLowerCase() : upperStr[i];
  }
  return newStr;
}

module.exports = alphaSwap;
