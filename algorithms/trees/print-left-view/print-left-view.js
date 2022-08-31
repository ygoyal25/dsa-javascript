import createTree from '../../../data-structures/trees/';

function printLeftView(root, levels_covered = [], curr_level = 1) {
    if (root && root.data && levels_covered.length < curr_level) {
        console.log(root.data);
        levels_covered.push(1);
    }

    if (root.left) {
        printLeftView(root.left, levels_covered, curr_level+1);
    }

    if (root.right) {
        printLeftView(root.right, levels_covered, curr_level+1);
    }
}

export default printLeftView;
