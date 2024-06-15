Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

**Example 1**:

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Example 2**:
```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

## Step-by-Step Solution

To achieve this, we'll use two passes through the array: one to calculate products of elements to the left of each index, and another to calculate products of elements to the right of each index.

### Step 1: Calculate Left Products
1. **Initialize an array** `ans` to hold our results, filled initially with 1s because multiplying by 1 doesn't change the product.
1. **Initialize a variable** `curr` to `1`. This will keep track of the product as we move through the array.
1. **First Loop (Left Products)**:
    - Go through the array from left to right.
    - For each position `i`, set `ans[i]` to the current value of `curr`, which holds the product of all elements to the left of i.
    - Update `curr` to include the current element `nums[i]`.
### Step 2: Calculate Right Products
1. Reset `curr` to `1`. We'll now use it to track the product of elements to the right of each index.
2. Second Loop (Right Products):
    - Go through the array from right to left.
    - For each position `i`, multiply `ans[i]` by the current value of `curr`, which now holds the product of all elements to the right of `i`.
    - Update `curr` to include the current element `nums[i]`.
