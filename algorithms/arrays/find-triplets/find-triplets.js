function findTriplets(arr) {
    // Start from end till we reach index
    let i = arr.length - 1;
    let count = 0
    while(i >= 2) {
        // Take a pointer on initial index, and one before i
        let j = 0;
        let k = i - 1;
        while(k > j) {
            // If the triplet is found
            if (arr[i] === arr[j] + arr[k]) {
                count += 1;
                k -= 1;
            } else if (arr[i] > arr[j] + arr[k]) {
                j += 1;
            } else {
                k -= 1;
            }
        }
        i -= 1;
    }
    return count || "No Triplets Found!!!"
}

export default findTriplets;
