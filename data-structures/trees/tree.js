
//! Returns this tree
// var tree = {data: 1, left: { data: 2, left: { data: 4, left:{data: 11},  right: { data: 8 } }, right: { data: 5 } }, right: { data: 3, left: { data: 6 }, right: { data: 7 } } }
//                      1
//              2               3
//          4       5       6       7
//      11      8

import Node from "../trees/node";

function createTree(arr) {
    let n = 0;
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
