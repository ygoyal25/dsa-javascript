import { comparator, swap } from "../../../utits/utils";

export default function bubbleSort(arr, comp = comparator) {
    let didSwap = true;
    while(didSwap) {
        didSwap = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (comp(arr[i], arr[i + 1]) > 0) {
                didSwap = true;
                swap(arr, i, i + 1);
            }
        }
    }
    return arr;
}