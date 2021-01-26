/**
 * @description Fast Exponention Program to calculate a ^ n in logN time complexity
 */

export function fastExp(a, n) {
    if (n == 0) {
        return 1
    }
    if (n == 1) {
        return a
    }
    
    var subProb = fastExp(a, n / 2);
    if (n & 1) {
        return a * subProb * subProb;
    } else {
        return subProb * subProb;
    }
}