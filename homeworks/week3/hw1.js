function stars(n) {
  const newArray = [];
  for (let i = 1; i <= n; i += 1) {
    let newStars = '';
    for (let j = 1; j <= i; j += 1) {
      newStars += '*';
    }
    newArray.push(newStars);
  }
  return newArray;
}

module.exports = stars;
