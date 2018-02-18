function reverseNumber(number) {
  if (number === undefined) {
    return false;
  }
  number = number.toString();
  number = number.split('').reverse();
  if (number[number.length - 1] === "-") {
    number.unshift(number.pop());
  }
  number = number.join('');
  return Number(number);
}