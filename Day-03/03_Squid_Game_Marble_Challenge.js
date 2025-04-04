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

const queries = [
  [1, 4],
  [3, 6],
];

const marbles = [10, 20, 30, 40, 50, 60];

const check = processQueries(marbles.length, marbles, queries);
console.log(check);
