class Sudoku {
  constructor(array) {
    this.array = array;
    this.size = Math.sqrt(array.length);
    this.length = array.length;
  }

  isValid() {
    // Check if size is valid
    if (!Number.isInteger(this.size) || this.array.length !== this.size ** 2) {
      return false;
    }

    if (this.array.some((row) => row.length !== this.size ** 2)) return false;

    // Check if all numbers are valid integers in range
    if (
      !this.array.every((row) =>
        row.every((num) =>
          Number.isInteger(num) && num >= 1 && num <= this.length
        )
      )
    ) return false;

    // Check rows
    if (!this.array.every((row) => this.isGroupValid(row))) return false;

    // Check columns
    for (let col = 0; col < this.size ** 2; col++) {
      const column = this.array.map((row) => row[col]);
      if (!this.isGroupValid(column)) return false;
    }

    // iterate through rows and check if each number appears once
    if (
      this.array.reduce(
        (acc, subArray) =>
          acc ||
          !subArray.every((item, index) => subArray.indexOf(item) === index),
        false,
      )
    ) return false;

    // Check blocks
    for (let blockRow = 0; blockRow < this.size; blockRow++) {
      for (let blockCol = 0; blockCol < this.size; blockCol++) {
        const block = [];
        for (let i = 0; i < this.size; i++) {
          for (let j = 0; j < this.size; j++) {
            block.push(
              this.array[blockRow * this.size + i][blockCol * this.size + j],
            );
          }
        }
        if (!this.isGroupValid(block)) return false;
      }
    }

    return true;
  }

  isGroupValid(group) {
    const seen = new Set();
    for (const num of group) {
      if (seen.has(num)) return false;
      seen.add(num);
    }
    return true;
  }
}

var goodSudoku1 = new Sudoku([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 9],
]);

var goodSudoku2 = new Sudoku([
  [1, 4, 2, 3],
  [3, 2, 4, 1],

  [4, 1, 3, 2],
  [2, 3, 1, 4],
]);

var badSudoku1 = new Sudoku([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]);

var badSudoku2 = new Sudoku([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1],
]);

// const weirdSudoku = new Sudoku([
//   [0],
// ]);

console.log(goodSudoku1.isValid(), true);
console.log(goodSudoku2.isValid(), true);

// console.log(badSudoku1.isValid(), false);
// console.log(badSudoku2.isValid(), false);

// console.log(weirdSudoku.isValid());
