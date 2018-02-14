function getClosestToZero() {
  let argumentsArray = [];
  // make array & negative numbers to positive
  for(let i = 0; i < arguments.length; i++){
    argumentsArray.push(arguments[i]);
    if(argumentsArray[i] < 0){
      argumentsArray[i] *= -1;
    }
  }
  return arguments[getMin(argumentsArray)];
}
getClosestToZero(9, 5, -4, -9);