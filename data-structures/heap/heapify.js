function maxHeapify(arr, i) {
    let largestNode = i;
    let leftInd = 2*i + 1;
    let rightInd = 2*i + 2;
    if (leftInd < arr.length && arr[leftInd] > arr[largestNode]) {
        largestNode = leftInd;
    }

    if (rightInd < arr.length && arr[rightInd] > arr[largestNode]) {
        largestNode = rightInd;
    }

    if (largestNode !== i) {
        const temp = arr[largestNode];
        arr[largestNode] = arr[i];
        arr[i] = temp;
        // console.log(arr);
        maxHeapify(arr, largestNode);
    }
}


function minHeapify(arr, i) {
    let largestNode = i;
    let leftInd = 2*i + 1;
    let rightInd = 2*i + 2;
    if (leftInd < arr.length && arr[leftInd] < arr[largestNode]) {
        largestNode = leftInd;
    }

    if (rightInd < arr.length && arr[rightInd] < arr[largestNode]) {
        largestNode = rightInd;
    }

    if (largestNode !== i) {
        const temp = arr[largestNode];
        arr[largestNode] = arr[i];
        arr[i] = temp;
        // console.log(arr);
        minHeapify(arr, largestNode);
    }
}

// const arr = [2, 6, 4, 5, 3];
// maxHeapify(arr, 0);
// console.log(arr);

export { maxHeapify, minHeapify };