function groupIn10s(...args) {
  let arr = [];

  for (const arg of args) {
    const remainder = arg % 10;
    const arrIndex = (arg - remainder) / 10;

    arr[arrIndex] ??= [];
    arr[arrIndex].push(arg);
  }

  return arr
    .map((innerArray) => {
      if (innerArray.length === 0) return undefined;
      return innerArray.sort();
    });
}

console.log(groupIn10s(1, 2, 3));
console.log(groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50));
console.log(groupIn10s(12, 10, 11, 13, 25, 28, 29, 49, 51, 90));
console.log(groupIn10s(100));
