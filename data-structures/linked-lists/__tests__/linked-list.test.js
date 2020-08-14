import LL from "../linked-list";
import findMiddle from "../../../algorithms/linked-list/find-middle";

test('create a linked list', () => {
    // expect(sum(1, 2)).toBe(3);
    const list = new LL();
    list.append(2);
    list.append(5);
    list.append(8);
    list.traverse();
    const middle = findMiddle(list);
    console.log(middle);
});