function inOrderTraversal(tree, method = 'REC', traverseArray = []) {
    if (method = 'REC') {
        if (!tree) {
            return [];
        }

        inOrderTraversal(tree.left, method, traverseArray);
        traverseArray.push(tree.val);
        inOrderTraversal(tree.right, method, traverseArray);
        return traverseArray;
    } else {
        let arr = new Array(100).fill(null), stack = new Array(100).fill(null);
        let sizeOfStack = 0, arrIndex = 0;
        let curr = node;
        while(sizeOfStack || curr !== null) {
            while (curr !== null) {
                stack[sizeOfStack++] = curr;
                curr = curr.left;
            }
            curr = stack[--sizeOfStack];
            arr[arrIndex++] = curr.val;
            curr = curr.right;
        }
        return arr.filter(a => a !== null);
    }
}