export default function maxPointsFromCards(cardPoints, k) {
    let start = cardPoints.length - k;
    let end = cardPoints.length - 1;

    let maxSum = 0;
    let prevSum = null;
    while(start <= cardPoints.length) {
        // console.log({ start, end, prevSum })
        if (prevSum !== null) {
            // console.log('Subtracting', cardPoints[start - 1 % cardPoints.length]);
            prevSum -= cardPoints[start - 1 % cardPoints.length];
            // console.log('Adding', cardPoints[end % cardPoints.length]);
            prevSum += cardPoints[end % cardPoints.length];
        } else {
            prevSum = 0;
            for(var j = start; j <= end; j++) {
                prevSum += cardPoints[j];
            }
        }
        maxSum = Math.max(prevSum, maxSum);
        start++;
        end++;
    }
    return maxSum
}

// console.log(maxPointsFromCards([5,4,7,4,3,5,8], 3))