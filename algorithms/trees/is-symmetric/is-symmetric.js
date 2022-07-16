function isSymmetric(root, method = 'REC') {
    if (method === 'REC') {
        return isMirror(root.left, root.right);
    } else {
        let queue = [];
        queue.push(root);
        queue.push(root);
        let isSym = true;
        while(queue.length) {
            let t1 = queue.pop();
            let t2 = queue.pop();
            if (t1 === null && t2 === null) {
                continue;
            }
            if (t1 === null || t2 === null) {
                isSym = false;
                break;
            }

            if (t1.val !== t2.val) {
                isSym = false;
                break;
            }
            queue.push(t1.left);
            queue.push(t2.right);
            queue.push(t1.right);
            queue.push(t2.left);
        }
        return isSym;
    }
}

function isMirror(t1, t2) {
    if (t1 === null && t2 === null) {
        return true;
    }

    if (t1 === null || t2 === null) {
        return false;
    }

    return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}