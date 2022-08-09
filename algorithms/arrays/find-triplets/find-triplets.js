function findTriplets(arr) {
    arr = arr.sort((a,b) => a - b);
    console.log(arr);
    // Start from end till we reach index
    let start = 0;
    let count = 0
    while(start < arr.length - 2) {
        // Take a pointer on initial index, and one before i
        let mid = start + 1;
        let end = arr.length - 1;
        while(end > mid) {
            // If the triplet is found
            if (arr[end] === arr[start] + arr[mid]) {
                count += 1;
                end -= 1;
            } else if (arr[end] < arr[start] + arr[mid]) {
                break;
            } else {
                end -= 1;
            }
            // console.log({ start, mid, end })
        }
        // console.log({ start, mid, end })
        start += 1;
    }
    return count || "No Triplets Found!!!"
}

console.log(findTriplets([1,5,1,2,3]));

// export default findTriplets;
