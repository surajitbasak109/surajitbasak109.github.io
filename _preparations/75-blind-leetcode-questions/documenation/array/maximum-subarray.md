## Given an integer array nums, find the subarray with the largest sum, and return its sum.

### Example 1:

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

### Example 2:

```
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

### Example 3:

```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

## Solution Explanation

We use a method called **Kadane's Algorithm** to solve this problem efficiently.

**Steps**

1. **Initialize Variables**:
    - `ans` to keep track of the largest sum we have found so far. We start it at a very small number (`-Infinity`).
    - `curr` to keep track of the current sum of the subarray we are considering. We start it at `0`.
2. **Iterate Through the Array**:
    - For each element in the array, add it to `curr`.
    - Update `ans` to be the maximum of `ans` and `curr`. This means we are checking if the current subarray sum is the largest we have seen so far.
    - If `curr` becomes negative, reset `curr` to `0`. This is because a negative sum will reduce the sum of any future subarray, so it's better to start fresh from the next element.
3. **Return the Largest Sum**:
    - At the end of the loop, `ans` will hold the largest sum of any subarray in the array.


