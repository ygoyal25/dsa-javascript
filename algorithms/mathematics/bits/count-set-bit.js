// Given an integer N, find number of set bits

function getSetBits(n) {
    let count = 0;
    while(n) {
        count = count + (n & 1);
        n = n>>1
    }
    return count;
}

function getSetBitsFast(n) {
    let count = 0;
    while(n) {
        count++;
        n = n & (n-1);
    }
    return count;
}

function getSetBitsLookUp(n) {
    let lookUp = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];
    let count = 0
    while(n) {
        let nibble = n & 0xF;
        count = count + lookUp[nibble];
        n = n>>4;
    }
    return count;
}

console.log(getSetBits(11));
console.log(getSetBitsFast(11));
console.log(getSetBitsLookUp(11));