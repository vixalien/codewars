function buyNewspaper(s1, s2) {
  // check if all characters are included
  if (!s2.split("").every((char) => s1.includes(char))) return -1;

  let counts = 1;
  let lookup = [...s1];

  s2.split("").forEach((char) => {
    while (true) {
      // find if the current char exists in s1
      const index = lookup.findIndex((c) => c === char);

      if (index < 0) {
        lookup.push(...s1);
        counts++;
        continue;
      }

      lookup.splice(0, index + 1);
      break;
    }
  });

  return counts;
}

console.log(buyNewspaper("abc", "abcabc"));
