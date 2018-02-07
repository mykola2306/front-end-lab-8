function convertCurrency() {
  let euroAmount = 100;
  let usdAmount = 52;

  let uahInEuro = 33.8565;
  let uahInUsd = 27.4609;

  let pharse = euroAmount + " euros are equal " + Math.floor(euroAmount * uahInEuro) +
    " UAH, " + usdAmount + " dollars are equal " + Math.floor(usdAmount * uahInUsd) +
    " UAH, one euro is equal " + (uahInEuro / uahInUsd).toFixed(3) + " dollars."

  console.log(pharse);

}

convertCurrency();