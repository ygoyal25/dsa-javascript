class UnionFind {
    constructor(n, edges) {
        this.arr = [];
        for (var i = 0; i < n; i++) {
            this.arr[i] = i;
        }

        edges.forEach(edge => {
            let [parent, child] = edge;
            this.union(parent, child);
            // console.log(arr);
        });
    }

    find(node) {
        return this.arr[node];
    }

    union(node1, node2) {
        let root1 = this.find(node1);
        let root2 = this.find(node2);
        if (root1 !== root2) {
            for (var i = 0; i < this.arr.length; i++) {
                if (this.arr[i] === root1) {
                    this.arr[i] = root2;
                }
            }       
        }
    }
}

export default UnionFind;

// const uf =  new UnionFind(10, [[0,1], [0,2], [1,3], [4,8], [5,6], [5,7], [7,8]]);
const uf =  new UnionFind(4, [[0,3], [1,2], [0,2]]);
console.log(uf);
