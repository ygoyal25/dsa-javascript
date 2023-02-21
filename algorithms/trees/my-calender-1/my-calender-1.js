function Node(start, end) {
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
}

function MyCalendarOne() {
    this.root = null;
}

MyCalendarOne.prototype.book = function(start, end) {
    if (this.root === null) {
        this.root = new Node(start, end);
        return true;
    } else {
        return this.add(this.root, start, end);
    }
}

MyCalendarOne.prototype.add = function(node, start, end) {
    // Case 1 - Overlap
    if (node.start < end && start < node.end) {
        return false;
    }

    // Case 2 - starts early
    if (start < node.start) {
        if (!node.left) {
            node.left = new Node(start, end);
            return true;
        }
        return this.add(node.left, start, end);
    }

    // Case 3 - starts late
    if (node.end <= start) {
        if (!node.right) {
            node.right = new Node(start, end);
            return true;
        }
        return this.add(node.right, start, end);
    }
}

const calendar = new MyCalendarOne();

console.log(calendar.book(1,2));
console.log(calendar.book(0,1));
console.log(calendar.book(0,2));
// console.log(JSON.stringify(calendar.root));