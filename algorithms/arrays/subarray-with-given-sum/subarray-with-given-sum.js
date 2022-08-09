export default function SubArrWithSumN(arr, n) {
    let sum = 0;
    let startIndex = 0
    for(let i = startIndex; i<arr.length; i++) {
        sum += arr[i];
        if (sum === n) {
            return [startIndex, i];
        }
        if (sum > n) {
            startIndex += 1;
            i = startIndex - 1;
            sum = 0;
        }
    }
}

export function SubArrWithSumNOpt(arr, n) {
    let sum = 0;
    let startIndex = 0
    for(let i = startIndex; i < arr.length; i++) {
        sum += arr[i];
        if (sum === n) {
            return [startIndex, i];
        }
        if (sum > n) {
            while(sum > n) {
                startIndex += 1;
                sum -= arr[startIndex - 1];
            }
            if (sum === n) {
                return [startIndex, i];
            }
        }
    }
}