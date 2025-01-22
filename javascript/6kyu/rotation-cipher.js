// https://www.codewars.com/kata/54729e48e1d2a369e00000d3/train/javascript

// a is 97
// z is 122
// difference is

function decodeMessage(input, suspected_content) {
  const valid = [];
  const charCodes = input.split("").map((_, index) => input.charCodeAt(index));

  for (let i = 0; i < 26; i++) {
    const string = String.fromCharCode(...charCodes.map((code) => {
      let newCode = code + i;
      if (newCode > 122) newCode -= 26;
      return newCode;
    }));

    if (string.includes(suspected_content)) {
      valid.push(string);
    }
  }

  return valid;
}

console.log(decodeMessage("ymjxvznwwjqnxhzyj", "squirrel"), [
  "thesquirreliscute",
]);
console.log(
  decodeMessage("lzwespnsdmwakafxafalq", "max").sort(),
  ["maxftqotenxblbgybgbmr", "themaxvalueisinfinity"].sort(),
);
