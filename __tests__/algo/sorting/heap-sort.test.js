import heapSort from "../../../algorithms/arrays/sorting/heap-sort";

describe('Test Heap Sort', () => {
    test('Check Heap Sort: Case 1', () => {
        const arrToSort = [1,4,2,77,1];
        const result = [...arrToSort].sort((a, b) => a - b);
        expect(heapSort(arrToSort)).toEqual(result);
    });
})
