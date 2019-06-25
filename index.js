//const numbers = [3, 6, 9];

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
  //const found = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i; {
  } 
  return -1;
}
function reduce(arr, callback, initialValue) {
  let acc = initialValue;
  for(let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
}

module.exports = {
  map,
  filter,
  find,
  reduce
};
