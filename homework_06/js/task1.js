function triangleForm() {
  // let triangleSides = [4, '5', 3];
  let triangleSides = [];
  for (var i = 1; i <= 3; i++) {
    triangleSides.push(prompt("Enter " + i + " number"));
  }
  console.log(triangleSides)

  // sort array from smallest to biggest
  // because i need 'sideC' to be the biggest number for 'right triangle' detection to work correctly
  triangleSides.sort(function (a, b) {
    return a - b
  });
  console.log(triangleSides)
  // parseFloat: '3adf' -> '3'
  let sideA = parseFloat(triangleSides.shift());
  let sideB = parseFloat(triangleSides.shift());
  let sideC = parseFloat(triangleSides.shift());

  // if 2 smallest sides are smaller then the biggest side, the triangle can not be formed, list incorrect data
  // else call function to identify triangle and calculate area
  if ((sideA + sideB) > sideC) {
    typeAndArea(sideA, sideB, sideC);
  } else {
    /*  List all incorrect entered Data  */
    if ((sideA + sideB) <= sideC) {
      console.log("Incorrect data - small sides");
    }
    if ((sideA <= 0) || (sideB <= 0) || (sideC <= 0)) {
      console.log("Incorrect data - negative values");
    }
    if ((isNaN(sideA)) || (isNaN(sideB)) || (isNaN(sideC))) {
      console.log("Incorrect data - detected letters/special characters or not defined values");
    }
  }
}

function typeAndArea(sideA, sideB, sideC) {
  let phrase = "Type of triangle is ";
  let perimeterHalf = (sideA + sideB + sideC) / 2;
  let area = (Math.sqrt(perimeterHalf * (perimeterHalf - sideA) * (perimeterHalf - sideB) * (perimeterHalf - sideC))).toFixed(2);

  // if number is whole, parse as Integer: 6.00 -> 6
  if (area % 1 === 0) {
    area = Number.parseInt(area);
  }

  if ((sideA * sideA + sideB * sideB) == sideC * sideC) { // 90* degree triangle
    phrase += "right triangle and area is " + area;
    console.log(phrase);
  } else if (sideA == sideB & sideB == sideC) { // All side equal
    phrase += "equilateral triangle and area is " + area;
    console.log(phrase);
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) { // 2 sides equal
    phrase += "isosceles triangle and area is " + area;
    console.log(phrase);
  } else if (sideA != sideB & sideB != sideC & sideA != sideC) { // All sides have different length
    phrase += "scalene triangle and area is " + area;
    console.log(phrase);
  }
}

triangleForm();