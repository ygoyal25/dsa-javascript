function postOrder(tree) {
    if (!tree) {
        return;
    }
    let node = tree;
    postOrder(node.left);
    postOrder(node.right);
    if (node.data) {
        console.log(node.data);
    }
}