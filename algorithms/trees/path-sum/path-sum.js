function pathSum(root, targetSum, method = 'REC', sum = targetSum) {
    if (method === 'REC') {
        if (root === null) {
            return false;
        }

        sum -= root.val;
        if (root.left === null && root.right === null) {
            return sum === 0;
        }
        return pathSum(root.left, targetSum, method, sum) || pathSum(root.right, targetSum, method, sum);
    } else {
        if (root === null) {
            return false;
        }
        let queue = [];
        let sum = 0;
        queue.unshift({root, sumRem : targetSum - root.val});
        while(queue.length) {
            let { root, sumRem } = queue.shift();
            if (root.left === null && root.right === null && sum === 0) {
                return true;
            }

            if (root.right) {
                queue.unshift({ root: root.right, sumRem: sumRem - root.right.val })
            }
            if (root.left) {
                queue.unshift({ root: root.left, sumRem: sumRem - root.left.val });
            }
        }
        return false;
    }
}