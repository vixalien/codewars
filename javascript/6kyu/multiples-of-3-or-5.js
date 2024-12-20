// https://www.codewars.com/kata/514b92a657cdc65150000006

function multiplesOf3To5(num) {
  if (num <= 0) return 0;
  let sum = 0;
  for (let i = 3; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multiplesOf3To5(10));
