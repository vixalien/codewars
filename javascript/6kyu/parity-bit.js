// https://www.codewars.com/kata/58409435258e102ae900030f/train/javascript

function parityBit(binary) {
  return binary
    .split(" ")
    .map((string) => {
      const seven_bit = string.slice(0, -1);
      const parity_bit = string[string.length - 1];

      const numberOfOnes = seven_bit.split("").reduce(
        (acc, curr) => acc + (curr === "1"),
        0,
      );

      if ((numberOfOnes % 2).toString() !== parity_bit) {
        return `error`;
      } else {
        return seven_bit;
      }
    })
    .join(" ");
}

console.log(parityBit("01011001"), "0101100");
console.log(parityBit("01101110 01100000"), "error 0110000");
console.log(parityBit("10100011 00111001 11001100"), "1010001 0011100 1100110");
