function maxTrafficFlow(trafficFlow, k) {
  // your code here
  let max = -Infinity;

  for (let i = 0; i <= trafficFlow.length - k; i++) {
    let result = 0;
    for (let j = i; j < i + k; j++) {
      result += trafficFlow[j];
    }
    max = Math.max(max, result);
  }

  return max;
}

function maxTrafficFlow_(trafficFlow, k) {
  let max = -Infinity;

  let left = 0;
  let right = 0;

  let result = 0;

  while (right < trafficFlow.length) {
    result += trafficFlow[right];

    if (right - left + 1 === k) {
      max = Math.max(max, result);
      result -= trafficFlow[left];
      left++;
    }
    right++;
  }

  return max;
}

let trafficFlow = [10, 20, 30, 40, 50];
let check = maxTrafficFlow_(trafficFlow, 3);
console.log(check);
