export default function(linkedList) {
    const head = linkedList.head;
    let slowPointer = head, fastPointer = head;

    if (!head || !head.next) {
        return head;
    }

    // Check if it is the last node
    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer.value;
}