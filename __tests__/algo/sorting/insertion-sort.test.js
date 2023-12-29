import insertionSort from "../../../algorithms/arrays/sorting/insertion-sort";

describe('Test Insertion Sort', () => {
    test('Check Insertion Sort: Case 1', () => {
        const arrToSort = [1,4,2,77,1];
        const result = [...arrToSort].sort((a, b) => a - b);
        expect(insertionSort(arrToSort)).toEqual(result);
    });

    test('Check Insertion Sort: Case 2', () => {
        const arrToSort = ["we", "are", "in", "the", "end", "game"];
        const result = [...arrToSort].sort((a, b) => a.length - b.length);
        expect(insertionSort(arrToSort, (a, b) => a.length - b.length)).toEqual(result);
    });
})
