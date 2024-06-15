/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = -Infinity, curr = 0;

  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    ans = curr > ans ? curr : ans;

    if (curr < 0) {
      curr = 0
    }
  }

  return ans;
}
