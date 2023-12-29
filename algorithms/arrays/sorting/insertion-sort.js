import { comparator, swap } from "../../../utits/utils";

function insertSort(arr, comp = comparator) {
    for (var i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && comp(arr[j - 1], arr[j]) > 0) {
            swap(arr, j, j - 1);
            j--;
        }
    }
    return arr;
}

export default insertSort;