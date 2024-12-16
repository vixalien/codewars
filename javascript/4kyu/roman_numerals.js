class RomanNumerals {
  static decimals = [
    // 1
    "I",
    // 5
    "V",
    // 10
    "X",
    // 50
    "L",
    // 100
    "C",
    // 500
    "D",
    // 1000
    "M",
  ];

  static toRoman(num) {
    let result = "";

    // loop over each element
    const split = num.toString().split("");
    split.forEach((char, startIndex) => {
      const index = split.length - startIndex - 1;

      // This will be I for 1, X for 10, etc...
      const onesChar = this.decimals[index * 2];
      // This will be V for 1, L for 10, etc...
      const fivesChar = this.decimals[index * 2 + 1];
      // This will be X for 1, C for 10, etc...
      const nextChar = this.decimals[(index + 1) * 2];

      const number = parseInt(char);
      if (number === 0) {
        return;
      } else if (number === 1) {
        result += onesChar;
      } else if (number === 5 && fivesChar) {
        result += fivesChar;
      } else if (number === 4 && fivesChar) {
        result += onesChar + fivesChar;
      } else if (number == 9 && nextChar) {
        result += onesChar + nextChar;
      } else if (number >= 5 && fivesChar) {
        result += fivesChar + onesChar.repeat(number - 5);
      } else {
        result += onesChar.repeat(number);
      }
    });

    return result;
  }

  static getNumeralValue(numeral) {
    if (!numeral) return undefined;
    const index = this.decimals.indexOf(numeral);
    const value = index % 2 ? 5 * 10 ** ((index - 1) / 2) : 10 ** (index / 2);

    return value;
  }

  static fromRoman(str) {
    let result = 0;

    const numerals = str.split("");
    numerals.forEach((numeral, index) => {
      const value = this.getNumeralValue(numeral);
      const nextValue = this.getNumeralValue(
        numerals.find((num, i) => i == index + 1 && num !== numeral),
      );
      const previousValue = this.getNumeralValue(
        numerals.findLast((num, i) => i < index && num !== numeral),
      );

      if (nextValue && nextValue > value) {
        result += nextValue - value;
      } else if (!previousValue || previousValue > value) {
        result += value;
      }
    });
    return result;
  }
}

console.log(RomanNumerals.toRoman(1931));
// Expected: MCMXXXI
console.log(RomanNumerals.fromRoman("MCMXXXI"));
// Expected: 1931
