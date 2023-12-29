function maxHeapify(arr, heapSize, i) {
    let largestNode = i;
    let leftInd = 2*i + 1;
    let rightInd = 2*i + 2;
    if (leftInd < heapSize && arr[leftInd] > arr[largestNode]) {
        largestNode = leftInd;
    }

    if (rightInd < heapSize && arr[rightInd] > arr[largestNode]) {
        largestNode = rightInd;
    }

    if (largestNode !== i) {
        const temp = arr[largestNode];
        arr[largestNode] = arr[i];
        arr[i] = temp;
        maxHeapify(arr, heapSize, largestNode);
    }
}


function minHeapify(arr, heapSize, i) {
    let largestNode = i;
    let leftInd = 2*i + 1;
    let rightInd = 2*i + 2;
    if (leftInd < heapSize && arr[leftInd] < arr[largestNode]) {
        largestNode = leftInd;
    }

    if (rightInd < heapSize && arr[rightInd] < arr[largestNode]) {
        largestNode = rightInd;
    }

    if (largestNode !== i) {
        const temp = arr[largestNode];
        arr[largestNode] = arr[i];
        arr[i] = temp;
        // console.log(arr);
        minHeapify(arr, heapSize, largestNode);
    }
}

export { maxHeapify, minHeapify };