import rotateMat from '../../algorithms/arrays/rotate-matrix-by-90deg/rotate-matrix-by-90deg';

describe('Rotate matrix by 90Deg', () => {
    test('Case 1', () => {
        const points = rotateMat([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);
        expect(points).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
    });

    test('Case 2', () => {
        const points = rotateMat([[1,2,3],[4,5,6],[7,8,9]]);
        expect(points).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
    });
})
