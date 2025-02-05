function getCachedFunction(func) {
  const resultMap = new Map();
  // do your magic here
  return (...args) => {
    if (resultMap.has(args)) return resultMap.get(args);
    const result = func(...args);
    result.set(args, result);
    return result;
  };
}
