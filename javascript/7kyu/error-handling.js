// @ts-check

// https://www.codewars.com/kata/55e6125ad777b540d9000042/train/javascript

const allVowels = new Set(["a", "e", "i", "o", "u"]);
const allConsonants = new Set([
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
]);

function getSentenceComponentsCount(word) {
  let consonants = 0;
  let vowels = 0;

  if (typeof word !== "string") return { consonants, vowels };

  word
    .split("")
    .forEach((char) => {
      console.log("char", char);
      if (allConsonants.has(char.toLowerCase())) {
        consonants++;
      } else if (allVowels.has(char.toLowerCase())) {
        vowels++;
      }
    });

  return { consonants, vowels };
}

console.log(getSentenceComponentsCount("Test"));
