const numbers = [3, 6, 9];

function map(arr, callback) {
  const mapped = [];
  for(let i = 0; i < arr.length; i++) {
    mapped[i] = callback(arr[i]); 
  }
  return mapped;
}
function filter(arr, callback) {
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      filtered[filtered.length] = arr[i];
    }
    return filtered;
  }
}
function find(arr, callback) {
  const found = [];
  if()
    found[i] = callback(arr[i]); 
  console.log(find); 
  return found;
}

// const double = numbers.map(number => number * 2);


// console.log(double);

module.exports = {
  map,
  filter,
  find
};
