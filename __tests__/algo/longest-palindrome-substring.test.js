import longestPalindrome from '../../algorithms/strings/longest-palindrome-substring/longest-palindrome-substring';

describe('Test Longest Palindrome Substring', () => {
    test('Case 1', () => {
        const substr = longestPalindrome('abcab');
        expect(substr).toBe('a');
    });

    test('Case 2', () => {
        const substr = longestPalindrome('abcbb');
        expect(substr).toBe('bcb');
    });

    test('Case 3', () => {
        const substr = longestPalindrome('dvfdad');
        expect(substr).toBe('dad');
    });
})
