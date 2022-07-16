const { maxHeapify, minHeapify } = require("./heapify");

function extractMax(arr) {
    let max = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.length = arr.length - 1;
    maxHeapify(arr, 0);
    console.log(arr);
}

function extractMin(arr) {
    let min = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.length = arr.length - 1;
    minHeapify(arr, 0);
    console.log(arr);
}

// extractMin([1,2,3,4,5,6,7,8]);

module.exports = { extractMax, extractMin };