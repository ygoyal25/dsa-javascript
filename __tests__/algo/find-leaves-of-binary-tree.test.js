import findLeaves from '../../algorithms/trees/find-leaves-of-binary-tree/find-leaves-of-binary-tree';
import createTree from '../../data-structures/trees/tree';

describe('Find Leaves of Tree', () => {
    test('Case 1', () => {
        const tree = createTree([1,2,3,null,5,6,null])
        const leaves = findLeaves(tree);
        expect(leaves).toEqual([[ 5, 6 ], [ 2, 3 ], [ 1 ]]);
    });
})
