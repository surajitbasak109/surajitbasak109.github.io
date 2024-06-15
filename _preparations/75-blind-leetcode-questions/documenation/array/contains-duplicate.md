# Contains Duplicate

Given an integer array `nums`, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1**:

```
Input: nums = [1,2,3,1]
Output: true
```

**Example 2**:

```
Input: nums = [1,2,3,4]
Output: false
```

**Example 3**:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

**Explanation for the solution**:

We need to maintain a hashmap. After iterating over the nums array we're going to check if hashmap has the value of the current number. If it is then return true. Else add the current number in the hash map.
When iteration is over, we're going to return false.

