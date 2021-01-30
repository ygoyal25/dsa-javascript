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

export default findHeight;
