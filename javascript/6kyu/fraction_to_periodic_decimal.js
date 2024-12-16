function functionToPeriodicDecimal(numerator, denominator) {
  const multiplicant = Math.trunc(numerator / denominator);
  const remainder = numerator - (denominator * multiplicant);
  let string = multiplicant;

  while (true) {
    const multiplicant = Math.trunc(numerator / denominator);
    remainder = numerator - (denominator * multiplicant);

    string += multiplicant;
    break;
  }

  return string;
}

console.log(functionToPeriodicDecimal(9, 2));
