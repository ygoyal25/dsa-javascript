function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function comparator(a, b) {
    // Swap needed
    if (a > b) {
        return 1;
    }

    // Don't swap
    return -1;
}

export { comparator, swap };