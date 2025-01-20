// https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

function findMissing(list) {
  let difference = undefined;
  let oddIndex = undefined;
  list.map((b, index) => {
    const a = list[index - 1];
    if (a === undefined) return undefined;

    if (difference && difference !== b - a) {
      oddIndex = index;
    }

    return difference = b - a;
  });
  return list[oddIndex - 2] + difference;
}

console.log(findMissing([1, 3, 4]), 2);
console.log(findMissing([1, 3, 5, 9, 11]), 7);
