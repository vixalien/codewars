// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  return str
    .split("")
    .filter((str) => !["a", "e", "i", "o", "u"].includes(str.toLowerCase()))
    .join("");
}

console.log(disemvowel("This website is for losers LOL!"));
