function integerToBCD(n) {
  const isNegative = n < 0;

  const numStr = Math.abs(n).toString();

  const bcdParts = [];

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i], 10);

    const binaryDigit = digit.toString(2).padStart(4, "0");
    bcdParts.push(binaryDigit);
  }

  const result = bcdParts.join(" ");

  return isNegative ? "-" + result : result;
}
