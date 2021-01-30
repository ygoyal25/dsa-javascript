class ArraySort {
    constructor(arr) {
        this.arr = arr;
    }

    insertSort(){
        const arr = this.arr;
        for(var i=0; i<arr.length - 1; i++) {
            for(var j=i+1; j>0; j--) {
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

    sortMerge(leftArr, rightArr) {
        let i = 0, j = 0, k = 0;
        const sortedArr = [];
        while(i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) {
                sortedArr.push(leftArr[i]);
                i++;
            } else {
                sortedArr.push(rightArr[j]);
                j++;
            }
        }

        while(j < rightArr.length) {
            sortedArr.push(rightArr[j]);
            j++;
        }
        
        while(i < leftArr.length) {
            sortedArr.push(leftArr[i]);
            i++;
        }

        return sortedArr;
    }

    mergeSort(arr = this.arr) {
        if (arr.length === 1) {
            return arr;
        }

        const mid = arr.length / 2;
        const leftSort = this.mergeSort(arr.slice(0, mid));
        const rightSort = this.mergeSort(arr.slice(mid));

        return this.sortMerge(leftSort, rightSort);
    }
}