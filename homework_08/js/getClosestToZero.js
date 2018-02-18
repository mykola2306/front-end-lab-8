function getClosestToZero() {
  if (arguments[0] === undefined) {
    return false;
  } else {
    let argumentsArray = [];
    // make array & negative numbers to positive
    for (let i = 0; i < arguments.length; i++) {
      argumentsArray.push(arguments[i]);
      if (argumentsArray[i] < 0) {
        argumentsArray[i] *= -1;
      }
    }
    let minNumIndex = 0;
    // start from 2nd number, as minNumIndex points to 1st number in array
    for (let i = 1; i < argumentsArray.length; i++) {
      if (argumentsArray[i] < argumentsArray[minNumIndex]) {
        minNumIndex = i;
      }
    }
    return arguments[minNumIndex];
  }
}