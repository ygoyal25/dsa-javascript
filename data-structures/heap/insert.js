function insertMax(arr, elem) {
    // Add to end of array
    arr.push(elem);
    // console.log(arr);
    // Check if the parent is smaller, then shift upwards
    let i = arr.length - 1;
    while(i > 0 && arr[Math.ceil(i/2) - 1] < arr[i]) {
        [arr[Math.ceil(i/2) - 1], arr[i]] = [arr[i], arr[Math.ceil(i/2) - 1]];
        i = Math.ceil(i / 2) - 1;
    }
    // console.log(arr);
    return arr;
}

function insertMin(arr, elem) {
    arr.push(elem);
    // console.log(arr);
    // Check if the parent is greater, then shift upwards
    let i = arr.length - 1;
    while(i > 0 && arr[Math.ceil(i/2) - 1] > arr[i]) {
        [arr[Math.ceil(i/2) - 1], arr[i]] = [arr[i], arr[Math.ceil(i/2) - 1]];
        i = Math.ceil(i / 2) - 1;
    }
    console.log(arr);
    return arr;
}

export { insertMax, insertMin };