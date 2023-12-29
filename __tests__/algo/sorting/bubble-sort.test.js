import bubbleSort from "../../../algorithms/arrays/sorting/bubble-sort";

describe('Test Bubble Sort', () => {
    test('Check Bubble Sort: Case 1', () => {
        const arrToSort = [1,4,2,77,1];
        const result = [...arrToSort].sort((a, b) => a - b);
        expect(bubbleSort(arrToSort)).toEqual(result);
    });

    test('Check Bubble Sort: Case 2', () => {
        const arrToSort = ["we", "are", "in", "the", "end", "game"];
        const result = [...arrToSort].sort((a, b) => b.length - a.length);
        expect(bubbleSort(arrToSort, (a, b) => b.length - a.length)).toEqual(result);
    });
})
