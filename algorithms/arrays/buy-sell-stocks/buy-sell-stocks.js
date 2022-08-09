function stockBuySell(arr, onlyOnceAllowed = false) {
    let min = Infinity;
    let profit = 0;
    for(var i = 0; i < arr.length; i++) {
        min = Math.min(arr[i], min);
        if (onlyOnceAllowed) {
            profit = Math.max(profit, arr[i] - min);
        } else {
            // Set the new min as we have already consumed this profit
            profit += arr[i] > min ? arr[i] - min : 0;
            min = arr[i];
        }
    }
    return profit;
}

export default stockBuySell;