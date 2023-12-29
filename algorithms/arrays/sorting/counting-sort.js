function countingSort(arr, k) {
    const freq = Array(k + 1).fill(0);

    arr.forEach(a => freq[a] += 1);
    
    const cummSum = [freq[0]]; // this indicates that there are cummSum[i] numbers <= i for i in cummSum array

    for (var i = 1; i < freq.length; i++) {
        cummSum[i] = cummSum[i - 1] + freq[i];
    }

    let res = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        res[cummSum[arr[i]] - 1] = arr[i];
        cummSum[arr[i]] -= 1;
    }
    return res
}

console.log(countingSort([2,5,0,3,2,3,0,3], 5));
console.log(countingSort([0,0,1,1,3,2,6,4], 6));