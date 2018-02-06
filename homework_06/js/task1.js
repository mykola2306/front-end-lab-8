function typeAndArea() {
  let phrase = "Type of triangle is ";
  let sideA = 3;
  let sideB = 4;
  let sideC = 5;
  let perimeterHalf = (sideA + sideB + sideC) / 2;
  let area = (Math.sqrt(perimeterHalf * (perimeterHalf - sideA) * (perimeterHalf - sideB) * (perimeterHalf - sideC))).toFixed(2);

  // find biggest side and use it as sideC
  if ((sideA * sideA + sideB * sideB) == sideC * sideC) {
    phrase += "right triangle and area is " + area;    
    console.log(phrase);
  }
  else if (sideA == sideB & sideB == sideC) {
    phrase += "equilateral triangle and area is " + area;
    console.log(phrase);
  }
  else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    phrase += "isosceles triangle and area is " + area;
    console.log(phrase);
  }
  else if (sideA != sideB & sideB != sideC & sideA != sideC) {
    phrase += "isosceles triangle and area is " + area;
    console.log(phrase);
  }
  else{
    console.log("unknown");
  }
}

typeAndArea();