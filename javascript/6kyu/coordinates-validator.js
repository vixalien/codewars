// https://www.codewars.com/kata/5269452810342858ec000951/train/javascript

const regexp = /^(-?(90|[0-8][0-9]|[0-9])(\.\d+)?),\s*(-?(180|1[0-7][0-9]|[1-9]?[0-9])(\.\d+)?)?$/;

function isValidCoordinates(coordinates) {
  return regexp.test(coordinates);
}

console.log(isValidCoordinates("4, -23.234235"))
