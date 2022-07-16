function preOrderTraversal(tree, method = 'REC', traverseArray = []) {
    if (method = 'REC') {
        if (!tree) {
            return [];
        }
    
        traverseArray.push(tree.val);
    
        preOrderTraversal(node.left, method, traverseArray);
        preOrderTraversal(node.right, method, traverseArray);
        return traverseArray;
    } else {
        let arr = [], stack = [];
        stack.push(node);
        while(stack.length) {
            let root = stack.pop();
            arr.push(root.val);
            if (root.right) {
                stack.push(node.right);
            }
            if(root.left) {
                stack.push(root.left);
            }
        }
    }
}