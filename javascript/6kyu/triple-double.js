function tripledouble(num1, num2) {
  for (let i = 0; i <= 9; i++) {
    if (
      num1.toString().includes(i.toString().repeat(3)) &&
      num2.toString().includes(i.toString().repeat(2))
    ) {
      return 1;
    }
  }
  return 0;
}

console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);
console.log(tripledouble(71928811133666, 59416499), 0);
