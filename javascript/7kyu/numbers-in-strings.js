// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014

function numbersInString(s) {
  return Math.max(...s.match(/(\d+)/g));
}

console.log(numbersInString("2ti9iei7qhr5"));
