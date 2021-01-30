function findHeight(tree) {
    if (!tree) return 0;

    lHeight = findHeight(tree.left);
    rHeight = findHeight(tree.rHeight);

    if (lHeight > rHeight) {
        return lHeight + 1
    } else {
        return rHeight + 1;
    }
}

export default findHeight;
