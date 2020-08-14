import LL from "../linked-list";
import findMiddle from "../../../algorithms/linked-list/find-middle";

test('create a linked list', () => {
    const list = new LL();
    list.append(2);
    list.append(5);
    list.append(8);
    list.traverse();
    const middle = findMiddle(list);
    expect(middle).toBe(5);
});