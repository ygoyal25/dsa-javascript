function stockBuySell(arr) {
    let buyIndex = -1;
    let sellIndex = -1;
    let profit = 0;
    for(var i = 0; i < arr.length - 1; i++) {
        while(arr[i] >= arr[i + 1]) {
            i++;
        }
        buyIndex = i;
        i += 1;
        while(arr[i - 1] <= arr[i]) {
            i++
        }
        sellIndex = i - 1;
        i--;
        profit += sellIndex > buyIndex ? arr[sellIndex] - arr[buyIndex] : 0;
    }
    return profit;
}

export default stockBuySell;