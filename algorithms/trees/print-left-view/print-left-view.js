function printLeftView(root, levels_covered = [], curr_level = 1, leftView = []) {
    if (root && root.val && levels_covered.length < curr_level) {
        levels_covered.push(1);
        leftView.push(root.val);
    }

    if (root.left) {
        printLeftView(root.left, levels_covered, curr_level+1, leftView);
    }

    if (root.right) {
        printLeftView(root.right, levels_covered, curr_level+1, leftView);
    }
    return leftView;
}

export default printLeftView;
