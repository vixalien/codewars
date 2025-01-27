function numToIEEE_754(num) {
  const sign = num > 0 ? "1" : "0";
  const exponent = Math.trunc(num).toString(2);
  const mantissa = num - Math.trunc(num);

  return [sign, exponent, mantissa]
}

console.log(numToIEEE_754(15.875))
