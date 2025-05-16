// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript

function getWordScore(word) {
  return word.split("").reduce((acc, curr) => {
    return acc + curr.charCodeAt(0) - 96;
  }, 0);
}

function high(x){
  return x.split(" ").sort((a, b) => {
    return getWordScore(b) - getWordScore(a);
  })[0];
}
