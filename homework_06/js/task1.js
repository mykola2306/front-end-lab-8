function typeAndSquare() {
  let phrase = "Type of triangle is ";
  let square = 0;
  let sideA = 4.52;
  let sideB = 4.52;
  let sideC = 4.52;

  if ((sideA * sideA + sideB * sideB) == sideC * sideC) {
    phrase += "right triangle ";
    square = (sideA * sideB) / 2;
    phrase += "and square is " + square;
    console.log(phrase);
  }

  if (sideA == sideB & sideB == sideC) {
    phrase += "equilateral triangle ";
    square = ((sideA * sideA * Math.sqrt(3)) / 4).toFixed(2);
    phrase += "and square is " + square;
    console.log(phrase);
  }
}

typeAndSquare();