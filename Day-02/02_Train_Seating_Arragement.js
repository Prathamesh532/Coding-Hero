function findUniqueNumber(nums) {
  // Your implementation here
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  result;
}
