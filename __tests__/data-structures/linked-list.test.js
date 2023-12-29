import LL from "../../data-structures/linked-lists/linked-list";
// import findMiddle from "../../algorithms/linked-list/find-middle";
import sort from "../../algorithms/linked-list/sort";
import traverse from "../../algorithms/linked-list/traverse";

test('create a linked list', () => {
    const list = new LL();
    list.append(7);
    list.append(5);
    list.append(3);
    list.append(9);
    list.append(12);
    traverse(list);
    // const middle = findMiddle(list.head);
    // console.log("Middle", middle);
    const sortedLL = sort(list.head);
    traverse(sortedLL);
    // sortedLL.traverse()
    // console.log(sortedLL);
    // expect(middle).toBe(8);
});