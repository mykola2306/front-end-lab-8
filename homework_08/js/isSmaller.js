function isBigger(number1, number2) {
  return number1 > number2;
}

function isSmaller(number1, number2) {
  if (number1 === number2) {
    return false;
  } else {
    return !isBigger(number1, number2);
  }
}