function apparentlyModifyStrings(sentence) {
  if (!sentence) return "";

  if (!sentence.includes("but") && !sentence.includes("and")) return sentence;

  const words = sentence.split(" ");
  let modified = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const nextWord = words[i + 1];

    modified += word;

    if ((word === "but" || word === "and") && nextWord != "apparently") {
      modified += " apparently";
    }

    if (i !== words.length - 1) modified += " ";
  }

  return modified;
}
