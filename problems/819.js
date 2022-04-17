// This problem was asked by Facebook. #819

// Given a array of numbers representing the stock prices of a company
// in chronological order, write a function that calculates the maximum
// profit you could have made from buying and selling that stock once.
// You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you
// could buy the stock at 5 dollars and sell it at 10 dollars.

function calcMaxProfit(array) {
    let profits = [];
    for (let i in array) {
        for (let ii in array) {
            if (ii <= i) continue;
            profits.push(array[ii] - array[i]);
        }
    }

    profits = profits.sort((a, b) => a - b);
    return profits[profits.length - 1];
}

const input = [9, 11, 8, 5, 7, 10];
console.log(calcMaxProfit(input));
