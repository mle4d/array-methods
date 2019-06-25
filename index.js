const numbers = [3, 6, 9];

function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]); 
  }
  return mapped;
}

const double = numbers.map(number => number * 2);


console.log(double);

module.export = map;
