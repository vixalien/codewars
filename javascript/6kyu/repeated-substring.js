// https://www.codewars.com/kata/5491689aff74b9b292000334/train/javascript

function getRepeatedSubstring(string) {
  for (let i = 1; i <= string.length; i++) {
    const substring = string.slice(0, i);

    if (substring.repeat(string.length /i) === string) {
      return [substring, string.length / substring.length];
    }
  }
}

console.log(getRepeatedSubstring("abcde"));
