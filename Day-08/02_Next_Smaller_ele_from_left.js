function nextSmallerElement(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        result[i] = arr[j];
        break;
      }
    }
  }

  return result;
}

function nextSmallerElement_(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1);

  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[i] <= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return result;
}

let arr = [4, 5, 2, 10, 8];
let check = nextSmallerElement(arr);
console.log(check);
