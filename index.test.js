const { map, filter, find, reduce } = require('./index');

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
  it('returns number', () => {
    const numbers = [3, 6, 9];
    const index = find(numbers, number => number > 8);
    expect(index).toEqual(-1);
  });
  it('reduce or something', () => {
    const numbers = [3, 6, 9];
    const callback = jest.fn();
    reduce(numbers, callback);
    expect(callback).toHaveBeenCalled(numbers.length);
  });
  it('returns accumulator', () => {
    const numbers = [3, 6, 9];
    const sum = reduce(numbers, (acc, item) => acc + item, 0);
    expect(sum).toEqual(18);
  });
});
