function alphaSwap(str) {
  // let newStr = '';
  // const upperStr = str.toUpperCase();
  // for (let i = 0; i < str.length; i += 1) {
  //   str[i] === upperStr[i] ? newStr += str[i].toLowerCase() : newStr += upperStr[i];
  // }
  // return newStr;


  let newStr = '';
  const upperStr = str.toUpperCase();
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === upperStr[i]) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += upperStr[i];
    }
  }
  return newStr;
}


module.exports = alphaSwap;
