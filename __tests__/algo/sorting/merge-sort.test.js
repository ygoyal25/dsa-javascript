import mergeSort from "../../../algorithms/arrays/sorting/merge-sort";

describe('Test Merge Sort', () => {
    test('Check Merge Sort: Case 1', () => {
        const arrToSort = [1,4,2,77,1];
        const result = [...arrToSort].sort((a, b) => a - b);
        expect(mergeSort(arrToSort)).toEqual(result);
    });

    test('Check Merge Sort: Case 2', () => {
        const arrToSort = [6,1,2,7];
        const result = [...arrToSort].sort((a, b) => a - b);
        expect(mergeSort(arrToSort)).toEqual(result);
    });

    test('Check Merge Sort: Case 3', () => {
        const arrToSort = ["we", "are", "in", "the", "end", "game"];
        const result = [...arrToSort].sort((a, b) => a.length - b.length);
        expect(mergeSort(arrToSort, (a, b) => a.length - b.length)).toEqual(result);
    });
})
