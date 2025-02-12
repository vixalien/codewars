
// ab

function permutations(string) {
  if (string.length <= 1) return [string];

  const result = new Set();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const remaining = string.slice(0, i) + string.slice(i + 1);

    for (const perm of permutations(remaining)) {
      result.add(char + perm);
    }
  }

  return Array.from(result);
}

// console.log(permutations("a"));
console.log(permutations("a"));
