export default function traverse(head) {
    let arr = [];
    let node = head;
    while(node) {
        if (node.value) {
            arr.push(node.value);
        }
        node = node.next;
    }
    console.log(arr.join(", "));
}