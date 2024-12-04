function countOccurences(arr, item) {
  return arr.reduce((acc, curr) => acc + (item === curr ? 1 : 0), 1);
}

function frequencySort(arr) {
  return arr.sort((a, b) => {
    const occ = countOccurences(arr, b) - countOccurences(arr, a);
    if (occ === 0) return a - b;
    return occ;
  });
}

console.log(frequencySort([2, 3, 5, 3, 7, 9, 5, 3, 7]));
