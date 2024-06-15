# Two Sum

**Question**:

Given an array of integers `nums` and an integer `target`, return *indices* of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

## Efficient approach to solve two sum problem
- Create a hashtable
- iterate over on the numbers array. And set the key as the number and value to index of that number
- Now iterate over on the numbers array again. Then get the complement using `target - nums[i]`
- Check if complement is in the hashtable and also check if the current index not equals to the key present in the hashtable
- if found, return [current index, and the key found in hashtable]
