// const arr = [7, 1, 5, 3, 6, 4];

// const buy_sell = (arr) => {
//   let min = arr[0];
//   let profit = 0;
//   for (let i = 1; i < arr.length; i++) {
//     let cost = arr[i] - min;
//     profit = Math.max(profit, cost);
//     min = Math.min(min, arr[i]);
//   }
//   return profit;
// };

function maxProfit(prices, index = 0, hasStock = false) {
  // Base case: if we've reached the end of the array
  if (index >= prices.length) {
    return 0;
  }

  if (hasStock) {
    // If we have a stock, we can either sell it or do nothing
    const sell = prices[index] + maxProfit(prices, index + 1, false);
    const doNothing = maxProfit(prices, index + 1, true);
    return Math.max(sell, doNothing);
  } else {
    // If we don't have a stock, we can either buy it or do nothing
    const buy = -prices[index] + maxProfit(prices, index + 1, true);
    const doNothing = maxProfit(prices, index + 1, false);
    return Math.max(buy, doNothing);
  }
}

// Example usage:
const prices = [2, 3, 4, 5, 6];
console.log(maxProfit(prices)); // Output: 7

// console.log(buy_sell([7, 1, 5, 3, 6, 4]));
