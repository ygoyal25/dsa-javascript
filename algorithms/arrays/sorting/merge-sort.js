import { comparator } from "../../../utits/utils";

function sortMerge(arr, comp, start, mid, end) {
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
        if (comp(leftArr[i], rightArr[j]) > 0) {
            arr[k++] = rightArr[j++];
        } else {
            arr[k++] = leftArr[i++];
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

export default function mergeSort(arr, comp = comparator, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return arr;
    }

    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, comp, start, mid);
    mergeSort(arr, comp, mid + 1, end);

    return sortMerge(arr, comp, start, mid, end);
}