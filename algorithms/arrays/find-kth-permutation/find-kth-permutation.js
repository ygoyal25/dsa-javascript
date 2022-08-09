function findKthPerm(n, k) {
    // console.log({ n, k });
    let i = 1;
    let arr = [];
    while(i <= n) {
        arr.push(i);
        i++
    }

    // console.log(arr);
    i = 1;
    while(i < k) {
        nextPermutation(arr);
        i++
    }

    return arr.join('');
}

function nextPermutation(nums) {
    
    // Continue till we reach a peak
    let i = nums.length - 1;
    while (i > 0 && nums[i] <= nums[i - 1]) {
        i--;
        continue;
    }
    if (i > 0) {
        let numToChange = i - 1;
        var j = i;
        while(nums[numToChange] < nums[j]) {
            j++;
        }
        [nums[numToChange], nums[j - 1]] = [nums[j - 1], nums[numToChange]];    
        // console.log('After', numToChange, nums);
    }

    j = i;
    let k = 0
    let mid = Math.floor((j + nums.length - 1) / 2);
    while(j <= mid) {
        [nums[j], nums[nums.length - 1 - k]] = [nums[nums.length - 1 - k], nums[j]];
        j++;
        k++
    }
    // console.log(nums);
};

export default findKthPerm;