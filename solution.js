function findMax(row) {
  const max = Math.max.apply(null, row);
  return max;
}

function findMin(row) {
  const min = Math.min.apply(null, row);
  return min;
}

function findDifference(row) {
  const difference = findMax(row) - findMin(row);
  return difference;
}

function findCheckSum(table) {
  let checkSum = 0;
  for (row of table) {
    checkSum += findDifference(row);
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
