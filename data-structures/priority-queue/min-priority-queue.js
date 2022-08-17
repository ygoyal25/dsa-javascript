import { minHeapify } from "../heap/heapify";


class minPriorityQueue {
    constructor(compare) {
        this.arr = [];
        this.compare = compare
    }

    compareVal(a, b) {
        return this.compare(a, b) < 0 ? true : false;
    }

    enqueue(key) {
        this.arr.push(key);
        let i = this.arr.length - 1;
        let parentIndex = Math.floor((i - 1) / 2);
        while(i >= 0 && this.arr[i] < this.arr[parentIndex]) {
            
            // Check if the value is small
            if (this.compareVal(this.arr[i], this.arr[parentIndex])) {
                [this.arr[i], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[i]];
            }
            i = parentIndex;
            parentIndex = Math.floor((i - 1) / 2);
        }
    }

    front() {
        return this.arr[0];
    }

    dequeue() {
        let min = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.length -= 1;
        minHeapify(this.arr, 0);
        return min;
    }
}

export default minPriorityQueue;