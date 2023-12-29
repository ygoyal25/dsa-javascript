import { maxHeapify } from "../../../data-structures/heap/heapify";

function heapSort(arr) {
    const innerNodes = Math.floor(arr.length);
    for (var i = innerNodes - 1; i >= 0; i--) {
        maxHeapify(arr, arr.length, i);
    }
    
    let len = arr.length;
    while(len) {
        const max = arr[0];
        arr[0] = arr[len - 1];
        arr[len - 1] = max;
        maxHeapify(arr, len - 1, 0);
        len--;
    }
    return arr;
}

export default heapSort;