// https://www.codewars.com/kata/5761a717780f8950ce001473/javascript

function calculateAge(from, to) {
  const age = to - from;

  if (age === 0) {
    return "You were born this very year!"
  } else if (age < 0) {
    if (age == -1) return `You will be born in ${-age} year.`;
    return `You will be born in ${-age} years.`;
  } else {
    if (age == 1) return `You are ${age} year old.`;
    return `You are ${age} years old.`;
  }
}
