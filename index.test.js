const map = require('./index');

describe('arrays', () => {
  it('doubles array numbers', () => {
    const number = [3, 6, 9];
    const double = number.map(number => number * 2);
    expect(double).toEqual([6, 12, 18]);
  });
});
