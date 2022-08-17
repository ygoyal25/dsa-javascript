import createHeap from "../../data-structures/heap/heap"

describe('Build Max Heap', () => {
    test('Case 1', () => {
        const resp = createHeap([3,5,1,2,6,7,8,4], 'MAX');
        expect(resp[0]).toBe(8);
    })

    test('Case 2', () => {
        const resp = createHeap([3,5,1,2,6,7,8,4], 'MIN');
        expect(resp[0]).toBe(1);
    })
})