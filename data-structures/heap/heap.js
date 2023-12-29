import { maxHeapify, minHeapify } from '../heap/heapify';

function createHeap(arr, type = 'MAX') {
    const innerNodes = Math.floor(arr.length / 2);
    for(var i = innerNodes - 1; i >= 0; i--) {
        if (type === 'MAX') {
            maxHeapify(arr, arr.length, i);
        } else {
            minHeapify(arr, arr.length, i);
        }
    }
    return arr;
}

const arr = [ 22, 44, 9, 12, 10, 3 ]
createHeap(arr);
console.log(arr);

export default createHeap;