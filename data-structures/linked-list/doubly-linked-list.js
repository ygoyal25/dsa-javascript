class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
        if (node === this.head) {
            return;
        }
  
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return
        }

        this.remove(node);
      
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
  
    setTail(node) {
        if (this.tail === node) {
            return
        }
  
        if (this.tail === null) {
            this.setHead(node);
            return;
        }


        this.remove(node);

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
  
    insertBefore(node, nodeToInsert) {
        if (node === nodeToInsert) {
            return;
        }
        
        this.remove(nodeToInsert);

        nodeToInsert.next = node;
        nodeToInsert.prev = node.prev;

        if (node.prev) {
            node.prev.next = nodeToInsert;
        } else {
            this.head = nodeToInsert;
        }

        node.prev = nodeToInsert;
    }
  
    insertAfter(node, nodeToInsert) {
        if (node === nodeToInsert) {
            return;
        }
        
        this.remove(nodeToInsert);

        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;

        if (node.next) {
            node.next.prev = nodeToInsert;
        } else {
            this.tail = nodeToInsert;
        }

        node.next = nodeToInsert;
    }
  
    insertAtPosition(position, nodeToInsert) {
        if (position === 1 || this.head === null) {
          this.setHead(nodeToInsert);
          return;
        }

        let ptr = this.head;
        let i = 1;
        while(ptr !== null && i < position) {
            ptr = ptr.next;
            i++
        }
        if (ptr === null) {
          this.setTail(nodeToInsert)
        } else {
          this.insertBefore(ptr, nodeToInsert);  
        }
    }
  
    removeNodesWithValue(value) {
      let ptr = this.head;
      while(ptr) {
        let { prev, next } = ptr;
        if (ptr.value === value) {
          this.remove(ptr);
          
          if (ptr === this.head) {
              this.head = next;
          }
  
          if (ptr === this.tail) {
              this.tail = prev;
          }
        }

        ptr = next;
      }
    }
  
    remove(node) {
        if (node === this.head) {
          this.head = this.head.next;
        }

        if (node === this.tail) {
          this.tail = this.tail.prev;
        }
      
        if (node.prev) {
            node.prev.next = node.next;
        }
    
        if (node.next) {
            node.next.prev = node.prev;
        }

        node.next = null;
        node.prev = null;
    }
  
    containsNodeWithValue(value) {
      let ptr = this.head;
      while(ptr !== null && ptr.value !== value) {
        ptr = ptr.next
      }
  
      return ptr !== null
    }
}