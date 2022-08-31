function disjointSet(n, edges, union) {
    let arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = i;
    }

    edges.forEach(edge => {
        let [parent, child] = edge;
        union(arr, parent, child);
        // console.log(arr);
    });
    return arr;
}

function checkConnectivity(arr, node1, node2, find) {
    return find(arr, node1) === find(arr, node2);
}

export { checkConnectivity, disjointSet }