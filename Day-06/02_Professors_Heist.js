// you just need to implement this function
function maxCashInWindow(cash, k) {
  // your code here

  let left = 0;
  let right = 0;

  let result = 0;
  let max = -1;

  while (right < cash.length) {
    result += cash[right];

    if (right - left + 1 == k) {
      max = Math.max(max, result);
      result -= cash[left];
      left++;
    }

    right++;
  }

  return max;
}

const cash = [1, 2, 3, 4, 5, 6];
let k = 3;

console.log(maxCashInWindow(cash, k));
