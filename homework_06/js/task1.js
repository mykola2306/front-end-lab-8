function typeAndSquare(){
  let phrase = "Type of triangle is ";
  let square = 0;
  let a = 3;
  let b = 4;
  let c = 5;

  if((a*a+b*b) == c*c){
    phrase += "right triangle ";
    square = (a*b)/2;
    phrase += "and square is " + square;
    console.log(phrase);
  }
}
typeAndSquare();