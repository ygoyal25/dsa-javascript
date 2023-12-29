import selectionSort from "../../../algorithms/arrays/sorting/selection-sort";

describe('Test Selection Sort', () => {
    test('Check Selection Sort: Case 1', () => {
        const arrToSort = [1,4,2,77,1];
        const result = [...arrToSort].sort((a, b) => a - b);
        expect(selectionSort(arrToSort)).toEqual(result);
    });

    test('Check Selection Sort: Case 2', () => {
        const arrToSort = ["we", "are", "in", "the", "end", "game"];
        const result = [...arrToSort].sort((a, b) => a.length - b.length);
        expect(selectionSort(arrToSort, (a, b) => a.length - b.length)).toEqual(result);
    });
})
