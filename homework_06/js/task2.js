function convertCurrency() {
  let euroCash = true;
  let usdCash = true;

  let euroAmount = 0;
  let usdAmount = 0;

  let uahInEuro = 33.8565;
  let uahInUsd = 27.4609;

  // keep running the loop until user entered only a number and not a string or empty string
  while (euroCash) {
    euroAmount = prompt("Enter amount of Euro: ");
    if (!isNaN(euroAmount) & (euroAmount !== "")) {
      euroCash = false;
    }
  }

  while (usdCash) {
    usdAmount = prompt("Enter amount of Usd: ");
    if (!isNaN(usdAmount) & (usdAmount !== "")) {
      usdCash = false;
    }
  }

  let pharse = euroAmount + " euros are equal " + Math.floor(euroAmount * uahInEuro) +
    " UAH, " + usdAmount + " dollars are equal " + Math.floor(usdAmount * uahInUsd) +
    " UAH, one euro is equal " + (uahInEuro / uahInUsd).toFixed(3) + " dollars."

  console.log(pharse);
}

convertCurrency();