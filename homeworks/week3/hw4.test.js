const isPalindromes = require('./hw4');

describe('hw4', () => {
  test('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('abcdcba')).toBe(true);
  });
  test('should return correct answer when str = abcba', () => {
    expect(isPalindromes('abcba')).toBe(true);
  });
  test('should return correct answer when str = apple', () => {
    expect(isPalindromes('apple')).toBe(false);
  });
  test('should return correct answer when str = aaaaa', () => {
    expect(isPalindromes('aaaaaa')).toBe(true);
  });
  test('should return correct answer when str = applppa', () => {
    expect(isPalindromes('applppa')).toBe(true);
  });
});
