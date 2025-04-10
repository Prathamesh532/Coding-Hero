// using temp array
function sortStack(arr) {
  let tempStack = [];

  for (let i = 0; i < arr.length; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    tempStack.push(arr[maxIndex]);

    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }

  return tempStack;
}

// using recursion
function recursiveSortStack(stack) {
  // base case
  if (stack.length === 0) return;

  let temp = stack.pop();
  recursiveSortStack(stack);
  inserElementInStack(stack, temp);
}

function inserElementInStack(stack, element) {
  if (stack.length === 0 || stack[stack.length - 1] >= element) {
    stack.push(element);
    return;
  }

  let temp = stack.pop();
  inserElementInStack(stack, element);
  stack.push(temp);
}

let stack = [5, 2, 9, 1, 5];
// const check = sortStack_V2(stack);
recursiveSortStack(stack);
console.log(stack);

// console.log(check);
