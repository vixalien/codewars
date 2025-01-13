// https://www.codewars.com/kata/6113c2dc3069b1001b8fdd05/train/javascript

// function countDuplicates(name, age, height) {
//   const joined = name.map((_, index) => name[index] + age[index] + height[index]);

//   return joined.reduce(
//     (acc, item, index, array) => {
//       console.log("index", item, index, array.findIndex((currItem) => currItem === item));
//      return  acc + (array.findIndex((currItem) => currItem === item) !== index)
//     },
//     0,
//   );
// }

function countDuplicates(names, ages, heights) {
  const map = new Map()

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const age = ages[i];
    const height = heights[i];

    const details = name + age + height;

    if (map.has(details)) {
      map.set(details, map.get(details) + 1)
    } else {
      map.set(details, 0)
    }
  }

  return Array.from(map.values())
    .reduce((acc, curr) => acc + (curr !== 0 ? curr : 0), 0)
}

const name = ['John','Beth','Beth','Bill'];
const age = [37,23,30,46];
const height = [183,170,165,175];
console.log(countDuplicates(name, age, height));
