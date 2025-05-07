// https://www.codewars.com/kata/53921994d8f00b93df000bea/solutions/javascript

function contentWeight(bottleWeight, scale) {
  let [count,,comparison] = scale.split(" ");
  const number = Number(count), larger = comparison === "larger";
  
  if (larger) {
    return bottleWeight * number / (number + 1);
  } else {
    return bottleWeight / (number + 1)
  }
}
