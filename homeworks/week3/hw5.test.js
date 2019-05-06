const add = require('./hw5');

describe('hw5', () => {
  test('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222');
  });
  test('should return correct answer when a=123 and b=456', () => {
    expect(add('123', '456')).toBe('579');
  });
  test('should return correct answer when a=12312383813881381381 and b=1129018313819319831', () => {
    expect(add('12312383813881381381', '129018313819319831')).toBe('12441402127700701212');
  });
  test('should return correct answer when a=123456789 and b=9999999999', () => {
    expect(add('123456789', '9999999999')).toBe('10123456788');
  });
});
