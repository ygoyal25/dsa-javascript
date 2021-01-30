function inOrder(tree) {
    if (!tree) {
        return;
    }
    let node = tree;
    inOrder(node.left);

    if (node.data) {
        console.log(node.data);
    }

    inOrder(node.right);
}