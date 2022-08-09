const { maxHeapify, minHeapify } = require("./heapify");

function extractMax(arr) {
    let max = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.length = arr.length - 1;
    maxHeapify(arr, 0);
    return max;
}

function extractMin(arr) {
    let min = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.length = arr.length - 1;
    minHeapify(arr, 0);
    return min;
}

module.exports = { extractMax, extractMin };