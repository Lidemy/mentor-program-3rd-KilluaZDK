const alphaSwap = require('./hw2');

describe('hw2', () => {
  test('should return correct answer when str = nick', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
  test('should return correct answer when str = Nick', () => {
    expect(alphaSwap('Nick')).toBe('nICK');
  });
  test('should return correct answer when str = ,hEllO122', () => {
    expect(alphaSwap(',hEllO122')).toBe(',HeLLo122');
  });
});
