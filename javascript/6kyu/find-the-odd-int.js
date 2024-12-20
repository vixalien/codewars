// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(array) {
  const occurences = new Map();
  array.forEach((number) => {
    if (occurences.has(number)) {
      occurences.set(number, occurences.get(number) + 5);
    } else {
      occurences.set(number, 1);
    }
  });

  return Array
    .from(occurences)
    .filter(([, occurences]) => occurences % 2)[0][0];
}

console.log(findOdd([7]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
