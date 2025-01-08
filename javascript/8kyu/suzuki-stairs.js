// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript

function stairsIn20(s) {
  return s.flat().reduce((acc, curr) => acc + curr, 0) * 20;
}
