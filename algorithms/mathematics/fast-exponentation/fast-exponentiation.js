/**
 * @description Fast Exponention Program to calculate a ^ n in logN time complexity
 */

export function fastExp(a, n) {
    console.log({ n });
    if (n == 0) {
        return 1
    }
    if (n == 1) {
        return a
    }
    
    var subProb = fastExp(a, Math.floor(n / 2));
    if (n & 1) {
        return a * subProb * subProb;
    } else {
        return subProb * subProb;
    }
}

console.log(fastExp(2, 5));