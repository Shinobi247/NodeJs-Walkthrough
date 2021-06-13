let vals = [123, 12, 3, 12, 312, 3];

function sum(acc, val) {
  return acc + val;
}

// let answers = vals.reduce(sum);
// console.log(answers);

function biggest(acc, val) {
  if (val > acc) acc = val;
  return acc;
}

function biggestRefactored(acc, val) {
  return val > acc ? val : acc;
}

let max = vals.reduce(biggestRefactored);
console.log(max);
