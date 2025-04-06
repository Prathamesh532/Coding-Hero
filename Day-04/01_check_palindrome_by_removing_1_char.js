// you need to implement this function only
const isPalindrome = (left, right, str) => {
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

function canBePalindrome(s) {
  // your code here
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(left + 1, right, s) || isPalindrome(left, right - 1, s)
      );
    }

    left++;
    right--;
  }

  return true;
}

check = canBePalindrome("racecar");
console.log(check);
