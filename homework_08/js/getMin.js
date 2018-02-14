function getMin() {
  let minNumIndex = 0;
  if (Array.isArray(arguments[0])) {
    for (let i = 0; i < arguments[0].length; i++) {
      if (arguments[0][i] < arguments[0][minNumIndex]) {
        minNumIndex = i;
      }
    }
    return minNumIndex;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] < arguments[minNumIndex]) {
        minNumIndex = i;
      }
    }
    return arguments[minNumIndex];
  }
}
getMin(1, 2, -5, -1, 4);