class minPriorityQueue {
    constructor(compare) {
        console.log("COMPARE>>>", compare);
        this.arr = [];
        this.compare = compare || ((a, b) => a - b);
    }

    compareVal(a, b) {
        console.log('COMPARE>>', a , b, this.compare(a,b));
        return this.compare(a, b) > 0 ? true : false;
    }

    enqueue(key) {
        // console.log(key);
        this.arr.push(key);
        let i = this.arr.length - 1;
        let parentIndex = Math.floor((i - 1) / 2);
        // console.log('PARENT INDEX', parentIndex);
        while(i >= 0 && parentIndex >= 0) {
            // console.log('CHECK HERE>>', this.arr[i], this.arr[parentIndex]);
            // Check if the parent value is greater
            if (this.compareVal(this.arr[parentIndex], this.arr[i])) {
                [this.arr[i], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[i]];
                // console.log('CHANGE', this.arr);
            }
            // console.log('NOT CHANGE', this.arr);
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
        this.minHeapify(0);
        return min;
    }

    minHeapify(i) {
        let largestNode = i;
        let leftInd = 2*i + 1;
        let rightInd = 2*i + 2;
        console.log({ largestNode, leftInd, rightInd }, this.arr);
        if (leftInd < this.arr.length && this.compareVal(this.arr[largestNode], this.arr[leftInd])) {
            largestNode = leftInd;
        }

        if (rightInd < this.arr.length && this.compareVal(this.arr[largestNode], this.arr[rightInd])) {
            largestNode = rightInd;
        }

        if (largestNode !== i) {
            const temp = this.arr[largestNode];
            this.arr[largestNode] = this.arr[i];
            this.arr[i] = temp;
            console.log(this.arr);
            this.minHeapify(largestNode);
        }
    }
}

export default minPriorityQueue;