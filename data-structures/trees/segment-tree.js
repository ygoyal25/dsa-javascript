function SegmentTree(arr) {
    this.segment = [];
    this.arr = arr;
    this.add(arr, 0, 0, arr.length - 1);
}

SegmentTree.prototype.add = function(arr, ind, start, end) {
    if (start === end) {
        this.segment[ind] = arr[start];
        return this.segment[ind];
    }

    let mid = Math.floor((start + end) / 2);
    this.segment[ind] = Math.max(this.add(arr, 2*ind + 1, start, mid), this.add(arr, 2*ind + 2, mid + 1, end));
    return this.segment[ind];
}

// start = start index of arr for Node with node index ind
// end = end index of arr for Node with node index ind
// s and e are the range for which we need to find max
SegmentTree.prototype.query = function(ind, start, end, s, e) {
    // Node has Complete overlap in the range to find
    console.log({ ind, start, end, s, e })
    if (start >= s && end <= e) {
        return this.segment[ind];
    }

    // No overlap
    if (start > e || end < s) {
        return -Infinity;
    }

    // Check left child for overlap
    const mid = Math.floor((start + end) / 2);
    const left = this.query(2*ind + 1, start, mid, s, e);
    const right = this.query(2*ind + 2, mid + 1, end, s, e);

    return Math.max(left, right);
}

const segmentTree = new SegmentTree([4,3,5,8,9,10,11,6]);
console.log(segmentTree.query(0, 0, 7, 1, 2));