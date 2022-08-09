function longestPal(str) {
    const mat = [];
    let palstr = '';
    let row = 0;
    while(row < str.length) {
        mat[row] = Array(str.length).fill(null);
        // Filling the diagonal as 1 as one char would always be a palindrome
        mat[row][row] = true;
        if (row < str.length - 1) {
            mat[row][row+1] = str[row] === str[row+1];
        }
        row++
    }

    for(var i = 0; i < str.length - 1; i++) {
        for(var j = i; j < str.length; j++) {
            if (checkIfPal(mat, str, i, j) && j - i + 1 > palstr.length) {
                palstr =  str.slice(i, j+1);
            }
            console.log(mat);
        }
    }
    console.log(palstr)
    return palstr;
}

function checkIfPal(mat, str, start, end) {
    if (mat[start][end] !== null) {
        return mat[start][end];
    }

    mat[start][end] = str[start] === str[end] && checkIfPal(mat, str, start + 1, end - 1);
    return mat[start][end]
}

longestPal('abaccbcc')