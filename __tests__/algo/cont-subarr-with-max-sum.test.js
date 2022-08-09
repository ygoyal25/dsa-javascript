import subArrWithMaxSum from "../../algorithms/arrays/cont-subarr-with-max-sum/cont-subarr-with-max-sum";

describe('Contiguous subarray with max sum', () => {
    test('Case 1', () => {
        const sum = subArrWithMaxSum([1,-2,3,4,5]);
        expect(sum).toBe(12);
    });

    test('Case 2', () => {
        const sum = subArrWithMaxSum([1,2,-3,4,5]);
        expect(sum).toBe(9);
    });
})