import maxPoints from '../../algorithms/arrays/max-points-from-cards/max-points-from-cards';

describe('Max Points From  Cards', () => {
    test('Case 1', () => {
        const points = maxPoints([5,4,7,4,3,5,8], 3);
        expect(points).toBe(18);
    });

    test('Case 2', () => {
        const points = maxPoints([9,3,7,4,3,4,8], 2);
        expect(points).toBe(17);
    });
})
