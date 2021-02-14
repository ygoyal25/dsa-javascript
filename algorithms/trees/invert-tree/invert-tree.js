function invertBinaryTree(tree) {
    if (!tree) {
        return null;
    }
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right);
    return tree;
}