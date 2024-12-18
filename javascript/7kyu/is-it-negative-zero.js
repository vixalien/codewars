function isNegativeZero(val) {
  return val === 0 && 1 / val === -Infinity;
}

console.log(isNegativeZero(0));
console.log(isNegativeZero(Infinity));
