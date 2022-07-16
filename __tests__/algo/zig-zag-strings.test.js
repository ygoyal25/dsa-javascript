import zigzagString from '../../algorithms/strings/zig-zag-strings/zig-zag-strings';

describe('Zig Zag Strings', () => {
    test('Case 1', () => {
        const zigZag = zigzagString('PAYPALISHIRING', 3);
        expect(zigZag).toBe('PAHNAPLSIIGYIR');
    });

    test('Case 1', () => {
        const zigZag = zigzagString('GEEKSFORGEEKS', 3);
        expect(zigZag).toBe('GSGSEKFREKEOE');
    });
})
