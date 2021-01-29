function subArrWithMaxSum(arr) {
    let max_so_far = arr[0];
    let max_till_here = 0;
    for (const x of arr) {
        max_till_here += x;
        if (max_so_far < max_till_here) {
            max_so_far = max_till_here
        }

        if (max_till_here < 0) {
            max_till_here = 0;
        }
    }

    return max_so_far;
}

export default subArrWithMaxSum;
