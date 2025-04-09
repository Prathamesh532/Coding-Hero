function isValidParentheses(s) {
  // please implement this funcation only
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;

  for (let char of s) {
    if (char === "(") cnt1++;
    else if (char === ")") cnt1--;
    else if (char === "[") cnt2++;
    else if (char === "]") cnt2--;
    else if (char === "{") cnt3++;
    else if (char === "}") cnt3--;
  }

  if (cnt1 == 0 && cnt2 == 0 && cnt3 == 0) return true;
  else return false;
}

function isValidParentheses_(s) {
  // please implement this funcation only
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    // if there is opening F
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

function isValidParentheses_(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "{") stack.push(char);
    else if (char === ")" || char === "}" || char === "]") {
      if (stack.length == 0 || stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

let s = "([)]";
const check = isValidParentheses_(s);
console.log(check);
