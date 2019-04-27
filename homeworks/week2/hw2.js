function capitalize(str) {
  let newStr = str;
  newStr = newStr.split('');
  newStr[0] = newStr[0].toUpperCase();
  newStr = newStr.join('');
  return newStr;
}

console.log(capitalize('hello'));
