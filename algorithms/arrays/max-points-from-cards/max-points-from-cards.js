export default function maxPointsFromCards(cardPoints, k) {
    let winEnd = cardPoints.length;
    let winStart = cardPoints.length - k;

    let maxSum = 0;
    let prevSum = null;
    let i = k === cardPoints.length ? k : 0;
    while (i <= k) {
        if (prevSum !== null) {
            prevSum -= cardPoints[(winStart + i - 1) % cardPoints.length];
            prevSum += cardPoints[(winEnd - 1 + i) % cardPoints.length];
            // console.log(prevSum, winStart + i, winEnd - 1 + i, i);
                // k--;
            // }
        } else {
            for(var j = winStart + i; j < winEnd + i; j++) {
                prevSum += cardPoints[j % cardPoints.length];
            }
        }
        maxSum = Math.max(maxSum, prevSum);
        i++;
    }
    // console.log(maxSum)
    return maxSum
}
