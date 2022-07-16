function findLeaves(root) {
    const heightArr = [];
    getNodeHeightArr(root, heightArr);
    return heightArr; 
}

// Mark the leaves with their corresponding height, leaf with 0, parent to leaf 1, grand parent to leaf 2, so on 
function getNodeHeightArr(root, arr) {
    if (root === null) {
        return -1
    }

    const height = Math.max(getNodeHeightArr(root.left, arr), getNodeHeightArr(root.right, arr)) + 1;
    if (arr[height] !== undefined) {
        arr[height].push(root.val);
    } else {
        arr[height] = [root.val];
    }
    return height;
}

export default findLeaves;