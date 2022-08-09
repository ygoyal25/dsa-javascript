import longestStrChain from "../../algorithms/dynamic-programming/longest-string-subsequence/longest-string-subsequence";

describe('Test Longest String Subsequence', () => {
    test('Case 1', () => {
        const substr = longestStrChain(['a', 'b', 'ab', 'abd', 'abc', 'abcf']);
        expect(substr).toBe(4);
    });

    test('Case 2', () => {
        const substr = longestStrChain(['a', 'b', 'ab', 'ac', 'acd']);
        expect(substr).toBe(3);
    });

    test('Case 3', () => {
        const substr = longestStrChain(['a', 'b']);
        expect(substr).toBe(1);
    });
})
