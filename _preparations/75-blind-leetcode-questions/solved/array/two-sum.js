/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < n; i++) {
        const left = target - nums[i];

        if (map.has(left) && map.get(left) !== i) {
            return [i, map.get(left)];
        }
    }

    return [];
};
