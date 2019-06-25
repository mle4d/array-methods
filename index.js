const numbers = [3, 6, 9];

function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]); 
  }
  return mapped;
}
const filter = numbers.filter(number => number % 2 === 0);
console.log(filter);

function find(arr, callback) {
  const found = [];
  if(number => number % 2 === 0)
    found[i] = callback(arr[i]); 
  console.log(find); 
  return found;
}

// const double = numbers.map(number => number * 2);


// console.log(double);

module.exports = {
  map,
  filter
};
