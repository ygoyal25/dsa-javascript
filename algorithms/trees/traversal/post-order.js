function postOrderTraversal(tree, method = 'REC', traverseArray = []) {
    if (method = 'REC') {
        if (!tree) {
            return [];
        }
    
        postOrderTraversal(node.left, method, traverseArray);
        postOrderTraversal(node.right, method, traverseArray);
        traverseArray.push(tree.val);
        return traverseArray;
    } else {
        // TODO
        let arr = [], stack = [];
        let curr = node;
        while(curr !== null || stack.length) {
            while(curr !== null) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = curr[curr.length - 1];
            if (curr.right) {
                curr = curr.right;
                stack.push(curr);
                curr = curr.left
            } else {
                curr = stack.pop();
                arr.push(curr.val);
            }
        }
    }
}

/*
                1
        2               3
    4       5       6       7


        1
            2
        3
*/