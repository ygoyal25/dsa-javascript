class LinkedList {
    constuctor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let node = this.head;
        if (node) {
            while(node.next) {
                node = node.next;
            }
            node.next = {
                value,
                next: null,
            }
        } else {
            this.head = {
                value,
                next: null,
            }
        }
    }

    traverse() {
        let node = this.head;
        while(node) {
            if (node.value) {
                console.log(node.value);
            }
            node = node.next;
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
            result.next = this.sortMerge(leftArr, rightArr.next);
        } else {
            result = leftArr;
            result.next = this.sortMerge(leftArr.next, rightArr);
        }
        return result;
    }

    sort(head) {
        if (!head || !head.next) {
            return head;
        }

        const middle = this.middle(head);
        console.log("Middle", middle);

        const nextNode = middle.next;

        middle.next = null;

        const leftSort = this.sort(head);
        const rightSort = this.sort(nextNode);

        return this.sortMerge(leftSort, rightSort);

    }

    middle(head) {
        let slowPointer = head;
        let fastPointer = head;

        if (!slowPointer) {
            return null;
        }

        if(!slowPointer.next) {
            return slowPointer;
        }

        fastPointer = fastPointer.next;

        while(fastPointer && fastPointer.next) {
            fastPointer = fastPointer.next;
            fastPointer = fastPointer.next;
            slowPointer = slowPointer.next;
        }

        return slowPointer;
        
    }
}