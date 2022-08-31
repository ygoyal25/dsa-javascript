import { disjointSet, checkConnectivity } from './disjoint-set';

function find(arr, node) {
    while(arr[node] !== node) {
        node = arr[node];
    }
    return arr[node];
}

function union(arr, node1, node2) {
    let parent1 = find(arr, node1);
    let parent2 = find(arr, node2);
    console.log({node1, node2, parent1, parent2 })
    if (parent1 !== parent2) {
        arr[parent1] = parent2;
    }
    console.log({ parent: arr });
}

// const arr = disjointSet(10, [[0,1], [0,2], [1,3], [4,8], [5,6], [5,7], [7,8]], union);
const arr = disjointSet(5, [[2, 0 ],[0, 1],[2, 1],[0, 4],[4, 1],[3, 2],[4, 3],[3, 1]], union);
console.log(arr);

console.log(checkConnectivity(arr, 0,3, find));
console.log(checkConnectivity(arr, 1,5, find));
console.log(checkConnectivity(arr, 8,6, find));