class ArraySort {
    constructor(arr) {
        this.arr = arr;
        this.times = 0;
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