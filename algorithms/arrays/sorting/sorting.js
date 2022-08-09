class ArraySort {
    constructor(arr) {
        this.arr = arr;
        this.times = 0;
    }

    selectionSort() {
        const arr = this.arr;
        for(var i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for(var j = i + 1; j < arr.length; j++) {
                if (arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        return arr;
    }

    insertSort(){
        const arr = this.arr;
        for(var i=0; i<arr.length - 1; i++) {
            for(var j= i + 1; j > 0; j--) {
                let key = arr[j]
                if (key <  arr[j-1]) {
                    arr[j] = arr[j-1];
                    arr[j-1] = key;
                }
            }
        }
        return arr;
    }

    bubbleSort() {
        const arr = this.arr;
        for(var i=0; i<arr.length; i++) {
            for(var j=0; j<arr.length-i; j++) {
                let key = arr[j];
                if (key > arr[j+1]) {
                    arr[j] = arr[j+1];
                    arr[j+1] = key;
                }
            }
        }

        return arr;

    }

    sortMerge(arr, start, mid, end) {
        const leftArr = [];
        const rightArr = [];

        for(var i = start; i <= mid; i++) {
            leftArr.push(arr[i]);
        }

        for(var j = mid + 1; j <= end; j++) {
            rightArr.push(arr[j]);
        }

        i = 0; j = 0;
        let k = start;
        while(i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }

        while(j < rightArr.length) {
            arr[k++] = rightArr[j++];
        }
        
        while(i < leftArr.length) {
            arr[k++] = leftArr[i++];
        }
        return arr;
    }

    mergeSort(arr = this.arr, start = 0, end = this.arr.length - 1) {
        if (start >= end) {
            return arr;
        }

        const mid = Math.floor((start + end) / 2);
        this.mergeSort(arr, start, mid);
        this.mergeSort(arr, mid + 1, end);

        return this.sortMerge(arr, start, mid, end);
    }

    quickSort(arr = this.arr, low = 0, high = this.arr.length - 1) {
        if (high <= low) {
            return arr;
        }
        
        let pivotIndex = this.partition(arr, low, high);

        this.quickSort(arr, low, pivotIndex - 1);
        this.quickSort(arr, pivotIndex + 1, high);

        return arr;
    }

    partition(arr, low, high) {
        let pivot = arr[high];

        let i = low - 1;
        for(let j = low; j < high; j++) {
            if (pivot > arr[j]) {
                i++;
                this.swap(arr, i, j);
            }
        }
        i++
        this.swap(arr, i, high);

        return i;
    }

    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

export default ArraySort;