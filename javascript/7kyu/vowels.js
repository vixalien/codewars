// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCountOfVowels(str) {
  return str.split("").reduce(
    (acc, curr) => acc + ["a", "e", "i", "o", "u"].includes(curr),
    0,
  );
}

console.log(getCountOfVowels("abracadabra"));
