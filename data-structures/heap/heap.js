import { maxHeapify, minHeapify } from '../heap/heapify';

function createHeap(arr, type = 'MAX') {
    const innerNodes = Math.floor(arr.length / 2);
    for(var i = innerNodes - 1; i >= 0; i--) {
        if (type === 'MAX') {
            maxHeapify(arr, i);
        } else {
            minHeapify(arr, i);
        }
    }
    return arr;
}

export default createHeap;