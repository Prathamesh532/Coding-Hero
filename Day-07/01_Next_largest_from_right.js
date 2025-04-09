function nextGreaterElement(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let next = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        next = arr[j];
        break;
      }
    }
    result.push(next);
  }
  return result;
}

function nextGreaterElement_(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1);

  let stack = []; // store the index

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }

  return result;
}

const arr = [13, 7, 6, 12];
const check = nextGreaterElement_(arr);
console.log(check);
