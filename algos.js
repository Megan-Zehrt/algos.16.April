// 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;  // Start with a large number
    let maxProfit = 0;  // Start with zero profit

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];  // Found a new minimum price
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;  // Found a new max profit
        }
    }

    return maxProfit;
};