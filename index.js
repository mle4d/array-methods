const numbers = [3, 6, 9];

function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]); 
  }
  return mapped;
}
function filter() {
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  return filter;
}
// const double = numbers.map(number => number * 2);


// console.log(double);

module.exports = {
  map,
  filter
};
