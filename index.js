const {
  performance
} = require('perf_hooks');

var t0 = performance.now();

function chunkArrayInGroups(arr, size) {
  let structuredArr = []

  for (let i = 0; i < arr.length; i += size)
    structuredArr.push(arr.slice(i, i + size))
  return structuredArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "f"], 2); 

var t1 = performance.now();
console.log("slice took " + (t1 - t0) + " milliseconds.")



var t0 = performance.now();

function chunkBank(arr, size) {
  let structuredArr = []
  let classifier = arr.length % size
  let equalParts = Math.floor(arr.length / size)

  for (let i = 0; i < arr.length; i += size) {
    let newArr = [];
    if (classifier != 0) {
      if (structuredArr.length == equalParts) {
        size = classifier
      }
    }
    for (let y = 0; y < size; y++) {
      newArr.push(arr[i + y])
    }
    structuredArr.push(newArr)
  }
  return structuredArr;
}


chunkBank(["a", "b", "c", "d", "f"], 2); 
var t1 = performance.now();
console.log("original took " + (t1 - t0) + " milliseconds.")
