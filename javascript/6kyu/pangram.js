function isPangram(string) {
  const map = new Map();
  for (const letter of string.toLowerCase()) {
    const charCode = letter.charCodeAt(0);
    if (charCode < 97 || charCode > 122) continue;

    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }

  return Array.from(map.keys()).length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram."));
