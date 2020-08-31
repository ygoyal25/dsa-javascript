import findMiddle from "./find-middle";

function sortMerge(leftArr, rightArr) {
    let result = null;
    if (!leftArr) {
        return rightArr;
    }

    if (!rightArr) {
        return leftArr;
    }

    if (leftArr.value > rightArr.value) {
        result = rightArr;
        result.next = sortMerge(leftArr, rightArr.next);
    } else {
        result = leftArr;
        result.next = sortMerge(leftArr.next, rightArr);
    }
    return result;
}

export default function sort(head) {
    if (!head || !head.next) {
        return head;
    }

    const middle = findMiddle(head);

    const nextNode = middle.next;

    middle.next = null;

    const leftSort = sort(head);
    const rightSort = sort(nextNode);

    return sortMerge(leftSort, rightSort);

}