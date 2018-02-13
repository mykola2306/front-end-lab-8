if (confirm("Do you want to play a game?")) {
  let numberOfAttempts = 3;
  let attempt = 3;
  let price = 10;
  let priceBase = 10;
  let priceMultiplyer = 1;
  let totalprice = 0;
  let randonNumber = 0;
  let userNumber = 0;
  let numberRange = 5;

  randonNumber = Math.floor(Math.random() * (numberRange + 1));
  // Game loop
  for (let i = 0; i < numberOfAttempts;) {
    userNumber = prompt(
      "\nEnter a number from 0 to " + numberRange +
      "\nAttempt left: " + attempt +
      "\nTotal price: " + totalprice +
      "\nPossible price on current attempt: " + price + "$", "0");
    // When guessing the number check if user clicked "Cancel"      
    if (userNumber === null || userNumber === false) {
      if (confirm("Do you want to QUIT?")) {
        console.log("Thank you for a game. Your price is: " + totalprice + "$");
        break;
      } else {
        continue;
      }
    }
    // If user did not enter anything or entered 'spaces', userNumber = NaN
    // Because empty string equals to 0;
    // If generateed random number is 0 and user did not enter anything, the camparison of the two variables will be true
    if (!userNumber.replace(/\s/g, "")) {
      userNumber = NaN;
    } else {
      userNumber = Number(userNumber);
    }

    if (userNumber === randonNumber) {
      // make look start from the begining
      i = 0;
      totalprice += price;
      priceMultiplyer *= 3;
      price = priceBase * priceMultiplyer;
      numberRange *= 2;
      attempt = numberOfAttempts;
      if (confirm("Do you want to continue?")) {
        randonNumber = Math.floor(Math.random() * (numberRange + 1));
      } else {
        console.log("Thank you for a game. Your price is: " + totalprice + "$");
        break;
      }
    } else {
      i++;
      attempt--;
      price = Math.floor(price / 2);
      if (attempt == 0) {
        console.log("Thank you for a game. Your price is: " + totalprice + "$");
        if (confirm("Do you want to play again?")) {
          // Reset user progress
          i = 0;
          attempt = 3;
          price = 10;
          priceMultiplyer = 1;
          totalprice = 0;
          numberRange = 5;
          randonNumber = Math.floor(Math.random() * (numberRange + 1));
        }
      }
    }
  }
} else {
  console.log("You did not become a millionaire!");
}