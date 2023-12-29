import Node from "./node";

export default class LinkedList {
    constuctor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new Node(value, null);
        let node = this.head;
        if (node) {
            while(node.next) {
                node = node.next;
            }
            node.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    prepend(value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;
    }

    delete(value) {
        let node = this.head;
        while(node) {

        }
    }

    search(value) {
        let node = this.head;
        let searchNode = null;
       
        while(node) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }
        return searchNode;
    }

    findMiddle() {
        let head = this.head;

        if (!head) {
            return head;
        }
    
        let slowPointer = head, fastPointer = head.next;
    
        while(fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
    
        return slowPointer;
    }
}