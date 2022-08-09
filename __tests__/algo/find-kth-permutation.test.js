import findKthPerm from "../../algorithms/arrays/find-kth-permutation/find-kth-permutation";

describe('Find kth permutation', () => {
    test('Case n = 3 k = 3', () => {
        const perm = findKthPerm(3,3);
        expect(perm).toBe("213");
    });

    test('Case n = 4 k = 3', () => {
        const perm = findKthPerm(4,3);
        expect(perm).toBe("1324");
    });
})