function preOrderTraversal(tree) {
    if (!tree) {
        return;
    }

    let node = tree;
    if (node.data) {
        console.log(node.data);
    }

    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}