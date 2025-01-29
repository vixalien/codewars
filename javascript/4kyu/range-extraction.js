function rangeExtraction(array) {
  let result = "";
  let rangeStart = null, rangeEnd = null;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const nextElement = array[i + 1];

    console.log(i, element, nextElement);
    console.log(
      "conditions",
      rangeEnd && element === rangeEnd + 1,
      element + 1 === nextElement,
    );

    if (rangeEnd && element === rangeEnd + 1) {
      rangeEnd = element;
      continue;
    } else if (element + 1 === nextElement) {
      rangeStart = element;
      rangeEnd = null;
      continue;
    } else if (rangeEnd !== null) {
      result += `,${rangeStart}-${rangeEnd}`;
      rangeEnd = null;
    } else {
      result += `,${element}`;
    }
  }
  return result;
}

console.log(
  rangeExtraction([
    -10,
    -9,
    -8,
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20,
  ]),
);
