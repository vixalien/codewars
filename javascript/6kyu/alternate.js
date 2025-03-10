function isAlt(word) {
  return word
    .toLowerCase()
    .split("")
    .every((char, index, array) => {
      const isVowel = ["a","e","i","o","u"].includes(char);
      if (index === 0) return true;
      
      const prevIsVowel = ["a","e","i","o","u"].includes(array[index-1]);
      return isVowel !== prevIsVowel;
    });
}

console.log(isAlt("amazon"))
