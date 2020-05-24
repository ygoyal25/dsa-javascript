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