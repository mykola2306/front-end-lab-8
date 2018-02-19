function increment(number) {
  return number + 1;
}

function getTransformedArray(arr, increment) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(increment(arr[i]));
  }
  return newArray;
}

// console.log(getTransformedArray([1, 8, 20], increment))
