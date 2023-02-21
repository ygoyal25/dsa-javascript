import printLeftView from "../../algorithms/trees/print-left-view/print-left-view";
import createTree from "../../data-structures/trees/tree";

describe('Print Left View', () => {
    test('Case 1', () => {
        let tree = createTree([1,2,3,4,5,6]);
        let leftView = printLeftView(tree)
        expect(leftView).toEqual([1,2,4]);
    });

    test('Case 2', () => {
        let tree = createTree([1,2,3,null,5,6]);
        let leftView = printLeftView(tree)
        expect(leftView).toEqual([1,2,5]);
    });
})