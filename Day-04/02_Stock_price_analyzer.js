// you just need to implement the function
function maxInRollingWindow(prices, k) {
  // you need to write the code here

  let result = [];

  let l = 0;
  let r = k;

  while (r <= prices.length) {
    let max = 0;
    for (let i = l; i < r; i++) {
      max = Math.max(max, prices[i]);
    }
    result.push(max);
    l++;
    r++;
  }

  return result;
}

function maxInRollingWindow_(prices, k) {
  let result = [];
  let deque = [];

  for (let i = 0; i < prices.length; i++) {
    // remove elements that are out of window
    if (deque.length > 0 && deque[0] <= i - k) deque.shift();

    // remove elements that are smaller than current element
    while (deque.length > 0 && prices[deque[deque.length - 1]] <= prices[i]) {
      deque.pop();
    }

    // add current element to deque
    deque.push(i);

    // add max element of current window
    if (i >= k - 1) result.push(prices[deque[0]]);
  }
}

let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const check = maxInRollingWindow_(prices, 3);
console.log(check);
