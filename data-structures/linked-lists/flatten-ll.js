class LinkedList {
    constuctor() {
        this.head = null;
        this.tail = null;
    }

    appendRight(value) {
        let node = this.head;
        if (node) {
            while(node.right) {
                node = node.right;
            }
            node.right = {
                value,
                right: null,
            }
        } else {
            this.head = {
                value,
                right: null,
            }
        }
    }

    appendDown(node, value) {
        node.down = {
            value,
            down: null,
        }
    }

    traverse() {
        let node = this.head;
        while(node) {
            if (node.value) {
                console.log(node.value);
            }
            node = node.right;
        }
    }

    sortMerge(leftArr, rightArr) {
        let result = null;
        if (!leftArr) {
            return rightArr;
        }

        if (!rightArr) {
            return leftArr;
        }

        if (leftArr.value > rightArr.value) {
            result = rightArr;
            result.right = this.sortMerge(leftArr, rightArr.right);
        } else {
            result = leftArr;
            result.right = this.sortMerge(leftArr.right, rightArr);
        }
        return result;
    }

    sort(head) {
        if (!head || !head.right) {
            return head;
        }

        const middle = this.middle(head);

        const rightNode = middle.right;

        middle.right = null;

        const leftSort = this.sort(head);
        const rightSort = this.sort(rightNode);

        return this.sortMerge(leftSort, rightSort);

    }

    middle(head) {
        let slowPointer = head;
        let fastPointer = head;

        if (!slowPointer) {
            return null;
        }

        if(!slowPointer.right) {
            return slowPointer;
        }

        fastPointer = fastPointer.right;

        while(fastPointer && fastPointer.right) {
            fastPointer = fastPointer.right;
            fastPointer = fastPointer.right;
            slowPointer = slowPointer.right;
        }

        return slowPointer;
        
    }

    flatten() {
        let currNode = this.head;

        while(currNode) {
            let downNode = currNode.down;
            while(downNode) {
                currNode.down = downNode.down;
                downNode.right = currNode.right;
                currNode.right = downNode;
                downNode.down = null;
                downNode = currNode.down; 
            }

            currNode = currNode.right;
        }

        return this.sort(this.head);
    }
}