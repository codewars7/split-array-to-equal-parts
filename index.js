//const chunkArrayInGroups = (arr, size) => {
//  let structuredArr = []
//  let classifier = arr.length % size
//  let equalParts = Math.floor(arr.length / size)
//
//  for (let i = 0; i < arr.length; i += size) {
//    let newArr = [];
//    if (classifier != 0) {
//      if (structuredArr.length == equalParts) {
//        size = classifier
//      }
//    }
//    for (let y = 0; y < size; y++) {
//      newArr.push(arr[i + y])
//    }
//    structuredArr.push(newArr)
//  }
//
//
//  return structuredArr;
//}

// second solution with slice method
// slice takes two arguents and if end is greater 
// then length it just slice till the last element of the array


const chunkArrayInGroups = (arr, size) => {
  let structuredArr = []
  for(let i = 0; i < arr.length; i+=size) {
    structuredArr.push(arr.slice(i, i + size))
  }
  return structuredArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d", "f"], 2))
