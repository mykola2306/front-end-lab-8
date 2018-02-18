function getMin() {
  let minNumIndex = 0;
  // start from 2nd number, as minNumIndex points to 1st number in array
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < arguments[minNumIndex]) {
      minNumIndex = i;
    }
  }
  return arguments[minNumIndex];
}