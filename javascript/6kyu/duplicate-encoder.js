// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  const map = new Map();
  for (const letter of word.toLowerCase()) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }

  return word
    .split("")
    .map((letter) => {
      if (map.get(letter.toLowerCase()) > 1) {
        return ")";
      } else {
        return "(";
      }
    })
    .join("");
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");
