export default function longestPalindrome(s) {
    // Create a 2D Array to create a matrix for palindrome with 0 as not palindrome and 1 as palindrome
    const arr = [];

    let x = 0;
    while(x < s.length) {
        arr[x] = Array(s.length).fill(null);
        // Filling the diagonal as 1 as one char would always be a palindrome
        arr[x][x] = 1;
        if (x < s.length - 1) {
            arr[x][x+1] = Number(s[x] === s[x+1]);
        }
        x++
    }

    let row = 0;
    let col = 0;

    // Filling the two chars to check for palindrome
    // row = 0;
    // col = 0;
    // while(row < s.length - 1) {
    //     col = row + 1;
    //     while(col <= row + 1) {
    //         arr[row][col] = Number(s[row] === s[col]);
    //         col++;
    //     }
    //     row++
    // }
    // console.log(arr)

    row = 0;
    let maxLen = 0;
    let subStr;
    while(row < s.length) {
        col = row;
        while(col < s.length) {
            const isPal = checkIfPal(arr, row, col, s);
            // console.log({ strToCheck: s.substring(row, col + 1), isPal })
            if (isPal && maxLen < col - row + 1) {
                maxLen = Math.max(maxLen, col - row + 1);
                subStr = s.substring(row, col + 1); 
            }
            col++;
        }
        row++;
    }
    // console.log(maxLen, subStr);
    return subStr;
}

function checkIfPal(arr, start, end, s) {
    // console.log({ arr, start, end, s })
    if (arr[start][end] !== null) {
        return arr[start][end];
    }

    const ifMiddleIsPal = checkIfPal(arr, start + 1, end - 1, s);
    // console.log({ ifMiddleIsPal, start, end })

    arr[start][end] = ifMiddleIsPal && Number(s[start] === s[end]);

    return arr[start][end];
    
}

longestPalindrome("abaccbcc");
// longestPalindrome("abc");