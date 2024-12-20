const words = ["Sand", "Water", "Fish", "Sun"];

function sumOfABeach(beach) {
  return beach.match(/sand|water|fish|sun/gi)?.length ?? 0;
}

console.log(sumOfABeach("WAtErSlIde"), 1);
console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"), 3);
console.log(sumOfABeach("gOfIshsunesunFiSh"), 4);
console.log(sumOfABeach("cItYTowNcARShoW"), 0);
