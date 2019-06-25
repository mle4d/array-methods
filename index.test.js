const { map, filter, find } = require('./index');

describe('arrays', () => {

  it('doubles array numbers', () => {
    const number = [3, 6, 9];
    const double = map(number, number => number * 2);
    expect(double).toEqual([6, 12, 18]);
  });

  it('filter array', () => {
    const numbers = [3, 6, 9];
    const filtered = filter(numbers, number => number % 2);
    expect(filtered).toEqual([]);
  });
  it('filters out odds', () => {
    const numbers = [3, 6, 9];
    const evens = filter(numbers, number => number % 2 === 0);
    expect(evens).toEqual([6]);
  });

  
});
