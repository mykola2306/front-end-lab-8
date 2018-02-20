function increment(number) {
  return number + 1;
}

function getTransformedArray(arr, increment) {
  let newArray = [];
  forEach(arr, function(arrEl){
    newArray.push(increment(arrEl));
  })
  return newArray;
}