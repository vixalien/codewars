function whatListAmIOn(actions) {
  let naughtyCount = 0;
  let niceCount = 0;

  for (let action of actions) {
    const firstLetter = action.charAt(0).toLowerCase();

    if (["b", "f", "k"].includes(firstLetter)) {
      naughtyCount++;
    } else if (["g", "s", "n"].includes(firstLetter)) {
      niceCount++;
    }
  }

  return naughtyCount >= niceCount ? "naughty" : "nice";
}
