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

    prepend(value) {
        const node = {
            value,
            next: this.head,
        }
        this.head = node;
    }

    delete(value) {
        let node = this.head;
        while(node) {

        }
    }

    search(value) {
        let node = this.head;
        let searchNode = null;
        // if (!node) {
        //     return false;
        // }
        // if (node.value === value) {
        //     return true;
        // }
        while(node) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }
        return searchNode;
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
}