function stockBuySell(arr) {
    let buyIndex = -1;
    let sellIndex = -1;
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
        console.log(buyIndex, sellIndex);
    }
}

stockBuySell([100,180,260,310,40,535,695])
stockBuySell([4,2,2,2,4])