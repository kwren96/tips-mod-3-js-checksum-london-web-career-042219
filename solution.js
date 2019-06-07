function findDifference(row) {
  let max = findMax(row);
  let min = findMin(row);
  let difference = max - min;
  return difference;
}

function findMax(row) {
  let max = Math.max.apply(null, row);
  return max;
}

function findMin(row) {
  let min = Math.min.apply(null, row);
  return min;
}

function findCheckSum(table) {
  let checkSum = 0;
  for (row of table) {
    let difference = findDifference(row);
    checkSum += difference;
  }
  return checkSum;
}
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
];
