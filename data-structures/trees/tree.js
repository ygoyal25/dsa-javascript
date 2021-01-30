
//! Returns this tree
// var tree = {data: 1, left: { data: 2, left: { data: 4, left:{data: 11},  right: { data: 8 } }, right: { data: 5 } }, right: { data: 3, left: { data: 6 }, right: { data: 7 } } }
//                      1
//              2               3
//          4       5       6       7
//      11      8

import Node from "../trees/node";

function createTree() {
    let root = new Node(1);
    let [n1, n2] = [new Node(2), new Node(3)];
    let [n3, n4, n5, n6] = [new Node(4), new Node(5), new Node(6), new Node(7)];
    let [n7, n8] = [new Node(11), new Node(8)];
    root.left = n1;
    root.right = n2;
    n1.left = n3;
    n1.right = n4;
    n2.left = n5;
    n2.right = 7;
    n3.left = n7;
    n3.right = n8;
    console.log(root.left.data);
    return root;
}

export default createTree();
