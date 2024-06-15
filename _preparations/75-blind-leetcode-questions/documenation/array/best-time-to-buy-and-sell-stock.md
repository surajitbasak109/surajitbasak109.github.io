# Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

**Example 1**:

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

**Example 2**:

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

**Solution**:

1. First make a buy_price to first price of prices and initialize profit to 0
2. Iterate over the prices array, check if buy price is greater than the current price.
3. Make the buy_price to current_price if it satisfies the condition.
4. Assign the maximum value between profit and `current_price - buy_price` to profit
5. Return the profit below the iteration loop

**Steps with visualization**:

```
7, 1, 5, 3, 6, 4
buy_price = 7
profit = 0

7, 1, 5, 3, 6, 4
   ^
current_price = 1
is buy_price > current_price?
    yes => buy_price = 1
profit = max(profit, current_price - buy_price) = max(0, 1 - 1) = max(0, 0) = 0

7, 1, 5, 3, 6, 4
      ^
current_price = 5
is buy_price > current_price?
    no => do nothing
profit = max(profit, current_price - buy_price) = max(0, 4) = 4

7, 1, 5, 3, 6, 4
         ^
current_price = 3
is buy_price > current_price?
    no => do nothing
profit = max(profit, current_price - buy_price) = max(4, 2) = 4

7, 1, 5, 3, 6, 4
            ^
current_price = 6
is buy_price > current_price?
    no => do nothing
profit = max(profit, current_price - buy_price) = max(4, 5) = 5

7, 1, 5, 3, 6, 4
               ^
current_price = 4
is buy_price > current_price?
    no => do nothing
profit = max(profit, current_price - buy_price) = max(5, 3) = 5

So, the profit will be 5

```
