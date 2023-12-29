import { comparator, swap } from '../../../utits/utils';

function selectionSort(arr, comp = comparator) {
    let ind = 0;
    while (ind < arr.length) {
        let minInd = ind;
        for (let i = ind + 1; i < arr.length; i++) {
            if (comp(arr[minInd], arr[i]) > 0) {
                minInd = i;
            }
        }
        swap(arr, ind, minInd);
        ind += 1;
    }
    return arr;
}

export default selectionSort;