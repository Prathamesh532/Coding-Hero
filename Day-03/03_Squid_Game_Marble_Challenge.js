function processQueries(n, marbles, queries) {
  let result = [];

  for (let [l, r] of queries) {
    let sum = 0;
    for (let i = l - 1; i <= r - 1; i++) {
      sum += marbles[i];
    }
    result.push(sum);
  }
  return result;
}

function processQueries_(n, marbles, queries) {
  let preFixSum = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    preFixSum[i] = preFixSum[i - 1] + marbles[i - 1];
  }

  let result = [];

  for (let [l, r] of queries) {
    result.push(preFixSum[r] - preFixSum[l - 1]);
  }

  return result;
}

const queries = [
  [1, 4],
  [3, 6],
];

const marbles = [10, 20, 30, 40, 50, 60];

const check = processQueries_(marbles.length, marbles, queries);
console.log(check);
