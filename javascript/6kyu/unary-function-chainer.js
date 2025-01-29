function chained(functions) {
  return function (input) {
    return functions.reduce((result, fn) => fn(result), input);
  };
}
