import Node from "../trees/node";

function createTree(arr) {
    return getNode(arr, 0);
}

function getNode(arr, n) {
    if (n >= arr.length || arr[n] === null) {
        return null;
    }
    let node = new Node(arr[n]);
    node.left = getNode(arr, 2*n + 1);
    node.right = getNode(arr, 2*n + 2);
    return node;
}

export default createTree;
