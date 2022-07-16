import findLeaves from '../../algorithms/trees/find-leaves-of-binary-tree/find-leaves-of-binary-tree';
import createTree from '../../data-structures/trees/tree';

describe('Find Leaves of Tree', () => {
    test('Case 1', () => {
        const tree = createTree()
        const leaves = findLeaves(tree);
        console.log(leaves);
    });
})
