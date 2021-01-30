import findHeight from "../find-height/find-height";

function levelOrder(tree) {
    if (!tree) {
        return
    }

    const height = findHeight(tree);
    console.log("Heig", height);

    for(let i = 0; i < height; i++) {
        levelTraverse(tree, i);
    }
}

function levelTraverse(tree, height) {
    if (!tree) {
        return;
    }

    if (height === 0) {
        console.log(tree.data);
    }

    if (height >= 0) {
        levelTraverse(tree.left, height - 1);
        levelTraverse(tree.right, height - 1);
    }
}

export default levelOrder;