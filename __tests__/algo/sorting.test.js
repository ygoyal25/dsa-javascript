import ArraySort from "../../algorithms/arrays/sorting/sorting";

let sortingAlgo;
let arrToSort = [];
let result = [];

beforeEach(() => {
    arrToSort = [1,4,2,77,1];
    sortingAlgo = new ArraySort(arrToSort);
    result = [...arrToSort].sort((a,b) => a - b);
})

describe('Test Sorting Algo', () => {
    test('Check Bubble Sort', () => {
        const bubbleSortedArr = sortingAlgo.bubbleSort();
        expect(bubbleSortedArr).toEqual(result);
    });

    test('Check Merge Sort', () => {
        // sortingAlgo = new ArraySort([1,4,2, 77])
        const mergeSortedArr = sortingAlgo.mergeSort();
        console.log(mergeSortedArr)
        expect(mergeSortedArr).toEqual(result);
    });

    test('Check Quick Sort', () => {
        const quickSortedArr = sortingAlgo.quickSort();
        expect(quickSortedArr).toEqual(result);
    });
})
