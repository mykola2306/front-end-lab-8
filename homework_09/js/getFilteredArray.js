function predicateFunction(num) {
  return num > 3;
}

function getFilteredArray(arr, predicateFunc) {
  let filteredArray = []
  forEach(arr, function (arrayElement) {
    if (predicateFunc(arrayElement)) {
      filteredArray.push(arrayElement);
    }
  });
  return filteredArray;
}