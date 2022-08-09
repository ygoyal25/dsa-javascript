function pathBetweenNodes(root, startValue, destValue) {
    let startPath = getPath(root, startValue);
    let endPath = getPath(root, destValue);

    let i = 0;
    while(startPath[i] === endPath[i]) {
        i++;
    }
    
    let mainPath = endPath.substring(i);
    while(i++ < startPath.length) {
        mainPath = 'U' + mainPath;
    }
    
    return mainPath
}

function getPath(root, target, path = '') {
    // console.log({ root: root?.val, path })
    if (root === null) {
        return false;
    }

    if (root.val === target) {
        return path;
    }

    return getPath(root.left, target, path + 'l') ||
    getPath(root.right, target, path + 'r');
}
