// https://www.codewars.com/kata/575135cabdd337cff50009cc/train/javascript

/**
 * @param {Record<"A" | "B" | "C", number>} status
 * @param {number} n
 * @returns {string}
 */
function switchLift(status, n) {
  const sortedLifts = Object.entries(status)
    .map(([liftName, liftLevel]) => {
      // this will return the number of levels the lift will have to move
      if (liftName === "A" && n % 2 === 0) return [liftName, Infinity];
      if (liftName === "B" && n !== 1 && (n % 2)) {
        return [liftName, Infinity];
      }
      return [liftName, Math.abs(liftLevel - n)];
    }).sort((a, b) => a[1] - b[1]);

  if (sortedLifts.some(([, value]) => value === 0)) return "";

  return sortedLifts.reduce((acc, curr) => {
    const lift = acc[0];
    const liftValue = lift && sortedLifts.find(([name]) => name === lift)[1];

    if (liftValue ? curr[1] === liftValue : true) {
      acc += curr[0];
    }
    return acc;
  }, "");
}

console.log(switchLift({ A: 1, B: 1, C: 10 }, 3));
console.log(switchLift({ A: 1, B: 1, C: 10 }, 4));
console.log(switchLift({ A: 1, B: 1, C: 10 }, 5));
console.log(switchLift({ A: 1, B: 1, C: 9 }, 1), "");
