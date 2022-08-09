function findHeight(tree) {
    if (!tree) return 0;

    let lHeight = findHeight(tree.left);
    let rHeight = findHeight(tree.right);

    if (lHeight > rHeight) {
        return lHeight + 1
    } else {
        return rHeight + 1;
    }
}

// export default findHeight;


function heightOfTree(root) {
    if (root === null) {
        return 0;
    }

    return 1 + Math.max(heightOfTree(root.left), heightOfTree(root.right));
}

export default heightOfTree;