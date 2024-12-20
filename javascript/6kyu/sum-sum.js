// S(N) sum of all positive numbers not more than N
function sumOfLesser(n) {
  return n * (n - 1n) / 2n;
}

function sumOfLesserSums(n) {
  return Array(Number(n))
    .fill(0)
    .map((_, i) => i + 1)
    .reduce((sum, curr) => sum + sumOfLesser(curr), 0);
}

function sumOfSums(n) {
  return BigInt(sumOfLesser(sumOfLesserSums(n)));
}

// console.log(sumOfSums(3n));
console.log(sumOfLesser(3n));
