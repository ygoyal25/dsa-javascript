function trappingWater(arr) {
    // Create left arr for max height for each element (including itself)
    const left = [arr[0]];
    for(let i = 1; i < arr.length; i++) {
        left[i] = Math.max(left[i - 1], arr[i]);
    }

    // console.log(left);
    // Same for right
    const right = [arr[arr.length-1]];
    for(let i = arr.length - 2; i >= 0; i--) {
        right.unshift(Math.max(right[right.length - 1], arr[i + 1]));
    }
    // console.log(right);
    let water = 0
    for(let i = 0; i < arr.length; i++) {
        water += Math.min(left[i], right[i]) - arr[i];
    }
    console.log(water);
}

trappingWater([7,4,0,9]);