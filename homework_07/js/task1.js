let pyramidBuilt = "";
let pyramidBlock = "[~]";
let spaceBlock = "   ";
let emptySpace = "";
let pyramidFloors = Number(prompt("Enter a number from 1-20"));
// Check for correct data input
if ((pyramidFloors >= 1 && pyramidFloors <= 20) && ((pyramidFloors % 1) == 0)) {
  // creating necessary space for the first pyramidBlock
  for (let i = 1; i < pyramidFloors; i++) {
    emptySpace += spaceBlock;
  }
  // adding pyramidBlocks
  for (let i = 0; i < pyramidFloors; i++) {
    pyramidBuilt += emptySpace;
    pyramidBuilt += pyramidBlock + "\n";
    pyramidBlock += "[~][~]";
    emptySpace = emptySpace.slice(0, -3);
  }
  console.log(pyramidBuilt);
} else {
  console.error("Incorrect data entered!");
}